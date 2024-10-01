import CustomButton from '@/components/CustomButton';
import { images } from '@/constants';
import { Redirect, router } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='w-full  items-center min-h-[85vh] px-4'>
                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className='max-w-[300px] w-full h-[300px]'
                    />

                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possibilities with {''}

                            <Text className='text-secondary-200'>Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                            resizeMode='contain'
                        />

                    </View>
                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovation: embark on a journey of Limitless exploration whit Aora</Text>
                    <CustomButton title='Continue whit Email' handlePress={() => router.push('/(auth)/sign-in')} containerStyles='w-full mt-7' />
                </View>
                <StatusBar backgroundColor="#161622" barStyle={'light-content'} />


            </ScrollView>
        </SafeAreaView>
    );
}


