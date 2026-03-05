import { TextInput, View, Pressable } from 'react-native'
import { useState } from 'react'

import { Eye, EyeOff } from 'lucide-react-native'
export function PasswordInputCustom({ value, onChangeText }) {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <View className="relative w-full">
            <TextInput
                placeholder="Подтвердите пароль"
                secureTextEntry={!showPassword}
                value={value}
                onChangeText={onChangeText}
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
    )
}

export function EmailInputCustom({ value, onChangeText }) {

    return (
        <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
            text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
        />
    )

}