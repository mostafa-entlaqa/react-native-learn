import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { isLoaded } from 'expo-font'

interface CustomButtonType {
    title: string
    handlePress: () => void
    containerStyles?: string
    textStyle?: string
    isLoading?: boolean
}

const CustomButton = ({ title, containerStyles, handlePress, isLoading, textStyle }: CustomButtonType) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={` bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ''} `}>
            <Text className={`${textStyle} text-primary font-psemibold text-lg`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton