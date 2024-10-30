import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.mk.aora',
    projectId: '6717679d0027d4006ed1',
    databaseId: '67176bf900245c39eeb8',
    usersCollectionId: '67176d94001ba58054de',
    videosCollectionId: '67176dd60001aa1f2de9',
    storageId: '6721e1cf001cec12dc4e'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (username: string, email: string, password: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            username,
            email,
            password
        )
        if (!newAccount) {
            throw new Error('something went wrong trying to sing up...')
        }

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl

            }
        )


    } catch (error) {
        console.log(error)
    }

}

const signIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        if (!session) {
            throw new Error
        }
    } catch (error) {

    }
}
