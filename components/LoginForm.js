import { MotiView } from 'moti';
import { useState } from 'react'
import { Pressable, Text, View, TextInput } from "react-native";
import { PasswordInputCustom, EmailInputCustom } from './TextInputCustom';

function LoginForm({ setAuthStatus }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState("false");
    const [isPasswordValid, setIsPasswordValid] = useState("false");

    function onLoginBtnPress() {
        console.log("email: ", email)
        console.log("password: ", password)

        console.log("isEmailValid: ", isEmailValid)
        console.log("isPasswordValid: ", isPasswordValid)
    }

    return (
        <View className="w-11/12 md:w-5/6 lg:w-3/5 xl:w-1/3 mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl 
        rounded-3xl shadow-2xl shadow-zinc-300 dark:shadow-zinc-950 dark:shadow-lg-login border border-zinc-200/50 dark:border-zinc-800/50
        flex flex-col p-8 md:p-12 relative z-10 items-center ">
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 600 }}
                className="flex flex-col gap-6 w-82 md:w-96">
                <View className="items-center gap-2">
                    <Text className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                        Добро Пожаловать
                    </Text>
                    <Text className="text-zinc-600 dark:text-zinc-400">
                        войдите в свой аккаунт SubControl
                    </Text>
                </View>

                <View className="gap-2">
                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Email
                    </Text>
                    <EmailInputCustom value={email} onChangeText={setEmail} setIsEmailValid={setIsEmailValid} ></EmailInputCustom>
                </View>

                <View className="gap-2">
                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Пароль
                    </Text>

                    <PasswordInputCustom value={password} onChangeText={setPassword} setIsPasswordValid={setIsPasswordValid} ></PasswordInputCustom>
                </View>

                <Pressable
                    onPress={onLoginBtnPress}
                    className="w-full ios:w-84 py-3 px-4 rounded-xl android:bg-orange-600 ios:bg-orange-600 web:bg-gradient-to-r web:from-orange-600 web:to-orange-700
                    text-white font-semibold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:from-orange-500 hover:to-orange-600 transition-all duration-500
                    relative overflow-hidden group">
                    <Text className="text-white font-semibold text-lg text-center">
                        Войти
                    </Text>
                </Pressable>

                <Text onPress={() => { setAuthStatus("register") }} className="text-center text-zinc-600 dark:text-zinc-400 py-2">
                    Ещё нет аккаунта? <Text className="text-orange-500" >Зарегистрироваться</Text>
                </Text>
            </MotiView>
        </View>

    );
}

export default LoginForm;