import { Pressable, Text, View, TextInput } from "react-native";

function LoginForm() {
    return (
        <View className="w-10/12 md:w-5/6 lg:w-3/5 xl:w-1/3 mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl 
        rounded-3xl shadow-2xl shadow-zinc-300 dark:shadow-zinc-950 dark:shadow-lg-login border border-zinc-200/50 dark:border-zinc-800/50
        flex flex-col p-8 md:p-12 relative z-10 items-center">
            <View
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 600 }}
                className="flex flex-col gap-6">
                <View className="items-center">
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
                    <TextInput
                        // value={email}
                        // onChangeText={setEmail}
                        keyboardType="email-address"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700
                    focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
                    text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                        placeholder="your@email.com"
                    />
                </View>

                <View className="gap-2">
                    <Text className="flex text-base font-medium text-zinc-700 dark:text-zinc-300">
                        Пароль
                    </Text>

                    <View className="relative">
                        <TextInput
                            //   value={password}
                            //   onChangeText={setPassword}
                            //   secureTextEntry={!showPassword}
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700
                    focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
                    text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                            placeholder="••••••••"
                        />

                        <Pressable className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Text className="text-orange-500 font-semibold">
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <Pressable
                    className="w-full ios:w-84 py-3 px-4 rounded-xl ios:bg-orange-600 web:bg-gradient-to-r web:from-orange-600 web:to-orange-700 text-white font-semibold text-lg shadow-lg shadow-orange-500/30
                hover:shadow-orange-500/40 hover:from-orange-500 hover:to-orange-600 transition-all duration-500 relative overflow-hidden group">
                    <Text className="text-white font-semibold text-lg text-center">
                        Войти
                    </Text>
                </Pressable>

                <Text className="text-center text-zinc-600 dark:text-zinc-400">
                    Ещё нет аккаунта?{" "}
                </Text>
            </View>
        </View>

    );
}

export default LoginForm;