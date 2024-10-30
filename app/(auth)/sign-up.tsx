import { View, Text, ScrollView, Image, NativeSyntheticEvent, TextInputChangeEventData, Alert } from "react-native"
import React, { FormEvent, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from "@/components/CustomButton"
import { Link, router } from "expo-router"
import { signIn } from "@/lib/appwrite"

const SignIn = () => {

    const [form, setForm] = useState<{
        username: string
        email: string
        password: string
    } | any>({
        username: "",
        email: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const submit = async () => {
        if (!{ ...form }) {
            Alert.alert('Error', 'please fill all the  fields')
        }
        setIsSubmitting(true)
        try {
            await signIn(form.email, form.password)

            router.replace('/home')

        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Error', error.message)
            } else {
                throw new Error
            }
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <SafeAreaView className="bg-primary  h-full">
            <ScrollView>
                <View className="w-full flex justify-center pt-20  px-4 my-4"
                >
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
                </View>
                <Text className='text-2xl text-white text-semibold px-4  mt-6 font-psemibold'>Sing up to Aora</Text>
                <View className="px-4">
                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        containerStyles="mt-7"
                        title="Sign Up"
                        handlePress={submit}
                        isLoading={isSubmitting}

                    />
                </View>
                <View className="flex flex-row justify-center items-center pt-5 gap-2 ">
                    <Text className="text-white text-base">Have an account? </Text>
                    <Link className="text-secondary text-base" href="/(auth)/sign-in">Sign In</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn 