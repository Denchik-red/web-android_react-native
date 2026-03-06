import { useState, useRef } from "react";
import { MotiView } from "moti";
import { View, Text, Pressable } from "react-native";
import { PasswordInputCustom, EmailInputCustom } from "./TextInputCustom";


function RegisterForm({ setAuthStatus }) {
    const isDisabled = true;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState("false");
    const [isPasswordValid, setIsPasswordValid] = useState("false");
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState("false");

    const [isPassworsMatch, setIsPasswordsMatch] = useState("true");

    function onRegisterBtnPress() {
        if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            console.log("Form is invalid. Please check your inputs.");
            return;
        }
        console.log("email", email)
        console.log("password", password)
        console.log("confirmPassword", confirmPassword)
    }


    return (
        <View className="w-11/12 md:w-5/6 lg:w-3/5 xl:w-1/3 mx-auto bg-white/80 dark:bg-zinc-900 backdrop-blur-xl 
        rounded-3xl shadow-2xl shadow-zinc-300 dark:shadow-zinc-950 dark:shadow-lg-login border border-zinc-200/50 dark:border-zinc-800/50
        flex flex-col py-8 md:py-12 relative z-10 items-center android:mt-20">
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 600 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl gap-6 flex items-center">
                <View className="items-center">
                    <Text className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                        Создать аккаунт
                    </Text>
                    <Text className="text-zinc-600 dark:text-zinc-400">
                        Введите ваши данные
                    </Text>
                </View>

                <View className="gap-6 w-82 md:w-96">
                    <View className="flex flex-col gap-2">
                        <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                            Email
                        </Text>
                        <EmailInputCustom value={email} onChangeText={setEmail} setIsEmailValid={setIsEmailValid} />
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                            Пароль
                        </Text>
                        <PasswordInputCustom
                            value={password}
                            onChangeText={(newValue) => {
                                setPassword(newValue)
                                if (newValue != confirmPassword) {
                                    setIsPasswordsMatch(false)
                                } else {
                                    setIsPasswordsMatch(true)
                                }
                            }}
                            setIsPasswordValid={setIsPasswordValid}
                            customError={isPassworsMatch ? "" : "Пароли не совпадают"} 
                        />
                    </View>

                    <View className="flex flex-col gap-2">
                        <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                            Повторите пароль
                        </Text>
                        <PasswordInputCustom
                            value={confirmPassword}
                            onChangeText={(newValue) => {
                                setConfirmPassword(newValue)
                                if (newValue != password) {
                                    setIsPasswordsMatch(false)
                                } else {
                                    setIsPasswordsMatch(true)
                                }
                            }}
                            setIsPasswordValid={setIsConfirmPasswordValid}
                            customError={isPassworsMatch ? "" : "Пароли не совпадают"}
                        />
                    </View>

                </View>

                <View className="flex-row gap-3">

                    {/* <Pressable onPress={onRegisterBtnPress} className="w-full android:w-84 ios:w-84 py-3 px-4 rounded-xl android:bg-orange-600 ios:bg-orange-600 web:bg-gradient-to-r
                    web:from-orange-600 web:to-orange-700 text-white font-semibold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40
                    hover:from-orange-500 hover:to-orange-600 transition-all duration-500 relative overflow-hidden group web:md:w-96 web:w-84"> */}
                    <Pressable
                        onPress={onRegisterBtnPress}
                        disabled={isDisabled}
                        className={` w-full android:w-84 ios:w-84 web:w-84 web:md:w-96 py-3 px-4 rounded-xl text-white font-semibold text-lg relative
                            overflow-hidden group transition-all duration-500
                            ${ isDisabled ? "bg-zinc-500 shadow-none " 
                                : "android:bg-orange-600 ios:bg-orange-600 web:bg-gradient-to-r web:from-orange-600 web:to-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:from-orange-500 hover:to-orange-600"}`}>
                        <Text className="text-white text-center font-semibold">
                            Создать аккаунт
                        </Text>
                    </Pressable>
                </View>

                <Text onPress={() => setAuthStatus("login")} className="text-center text-zinc-600 dark:text-zinc-400 py-2">
                    Уже есть аккаунт? <Text className="text-orange-500">Войти</Text>
                </Text>
            </MotiView>
        </View>

    )
}

export default RegisterForm