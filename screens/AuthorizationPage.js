import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function AuthorizationPage() {


    const [authStatus, setAuthStatus] = useState("login");


    return (
        <View className="flex-1">
            <ScrollView className=" web:min-h-screen web:min-w-full ios:android:w-full ios:android:h-full dark:bg-black bg-zinc-50 overflow-x-hidden web:selection:bg-orange-500
      selection:text-zinc-100 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] duration-500 flex web:justify-center android:pt-30 ios:pt-50
        bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-zinc-200)] dark:[--pattern-fg:var(--color-white)]/20">

                <View className={authStatus == "login" ? "android:mt-25 ios:mt-25" : ""}>
                    {authStatus == "login" ? (
                        <LoginForm setAuthStatus={setAuthStatus}></LoginForm>
                    ) : (
                        <RegisterForm setAuthStatus={setAuthStatus}></RegisterForm>
                    )}
                </View>

            </ScrollView>
            <View className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
                <View className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
                <View className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
            </View>
        </View>
    )
}

export default AuthorizationPage;