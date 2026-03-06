import { TextInput, View, Pressable, Text } from 'react-native'
import { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react-native'
export function PasswordInputCustom({ value, onChangeText, setIsPasswordValid, customError="" }) {

    const [showPassword, setShowPassword] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState("")

    function onPasswordInput(newValue) {
        let clearValue = newValue.trim()
        onChangeText(clearValue)

        if (clearValue.length < 3 || clearValue.length > 20) {
            setPasswordErrorText(clearValue == "" ? "" : "Пароль должен содержать от 3 до 20 символов")
            setIsPasswordValid(false)
        } else {
            setPasswordErrorText("")
            setIsPasswordValid(true)
        }
    }

    return (
        <View>
            <View className="relative w-full">
                <TextInput
                    placeholder="Подтвердите пароль"
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onPasswordInput}
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 
                border border-zinc-200 dark:border-zinc-700 
                focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 
                text-zinc-900 dark:text-zinc-100 
                placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                />

                <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 z-10"
                >
                    {showPassword ? (
                        <EyeOff size={20} color="#a1a1aa" />
                    ) : (
                        <Eye size={20} color="#a1a1aa" />
                    )}
                </Pressable>
            </View>
            <View className="min-h-5">
                <Text className="text-red-500">{(passwordErrorText ? passwordErrorText + '\n' : '') + customError}</Text>
            </View>
        </View>
    )
}

export function EmailInputCustom({ value, onChangeText, setIsEmailValid, customError = "" }) {

    const [emailErrorText, setEmailErrorText] = useState("")

    function onEmailInput(newValue) {
        let clearValue = newValue.trim()
        onChangeText(clearValue)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValueValidEmail = emailRegex.test(clearValue);
        if (!isValueValidEmail) {
            setEmailErrorText(clearValue == "" ? "" : "Введите корректный email")
            setIsEmailValid(false)
        } else {
            setEmailErrorText("")
            setIsEmailValid(true)
        }
    }

    return (
        <View className="relative w-full">

            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onEmailInput}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 
            text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
            />
            <View className="min-h-5">
                <Text className="text-red-500">{(emailErrorText ? emailErrorText + '\n' : '') + customError}</Text>
            </View>
        </View>
    )

}