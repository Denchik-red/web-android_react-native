import { useState, useEffect } from "react";
import { MotiView } from "moti";
import { View, Text, Pressable } from "react-native";
import { PasswordInputCustom, EmailInputCustom } from "./TextInputCustom";


function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function onRegisterBtnPress() {
        console.log( "email", email)
        console.log( "password", password)
        console.log( "confirmPassword", confirmPassword)
    }


    return (
        <View className="w-11/12 md:w-5/6 lg:w-3/5 xl:w-1/3 mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl 
        rounded-3xl shadow-2xl shadow-zinc-300 dark:shadow-zinc-950 dark:shadow-lg-login border border-zinc-200/50 dark:border-zinc-800/50
        flex flex-col py-8 md:py-12 relative z-10 items-center">
            <MotiView
                className="bg-white dark:bg-zinc-900 rounded-3xl gap-6">
                <View className="items-center">
                    <Text className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                        Создать аккаунт
                    </Text>
                    <Text className="text-zinc-600 dark:text-zinc-400">
                        Введите ваши данные
                    </Text>
                </View>

                <View className="gap-4 w-82">
                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Email
                    </Text>
                    <EmailInputCustom value={email} onChangeText={setEmail}></EmailInputCustom>


                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Пароль
                    </Text>
                    <PasswordInputCustom value={password} onChangeText={setPassword}></PasswordInputCustom>
                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Повторите пароль
                    </Text>
                    <PasswordInputCustom
                        value={confirmPassword}
                        onChangeText={(newValue) => {
                            setConfirmPassword(newValue)
                        }}
                    ></PasswordInputCustom>

                </View>

                <View className="flex-row gap-3">

                    <Pressable
                        onPress={onRegisterBtnPress}
                        className="py-3 rounded-xl bg-orange-600 flex-1"
                    >
                        <Text className="text-white text-center font-semibold">
                            Создать аккаунт
                        </Text>
                    </Pressable>
                </View>

                <Text className="text-center text-zinc-600 dark:text-zinc-400">
                    Уже есть аккаунт?
                </Text>
            </MotiView>
        </View>

    )
}

export default RegisterForm