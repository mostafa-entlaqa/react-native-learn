import { View, Text, ScrollView, Image, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import React, { FormEvent, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from "@/components/CustomButton"

const SignIn = () => {
  const [form, setForm] = useState<any>({
    email: "",
    password: ""
  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6"
        >
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
        </View>
        <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aora</Text>
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
          title="Sign In"
          handlePress={() => {}} 
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn 