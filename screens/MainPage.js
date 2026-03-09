import { View, Text, Pressable } from "react-native"
import { useState } from "react"
import Subscribe from "../components/Subscribe"


function MainPage() {
    function onAddSubscribeBtnPress() {
        console.log("onAddSubscribeBtnPress")
    }

    const [totleCost, setTotleCost] = useState(3000)

    return (
        <View className="flex-1 p-6 bg-gray-50 px-10">
            <View className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <View>
                    <Text className="text-2xl font-bold text-gray-900">Мои подписки</Text>
                    <Text className="text-gray-500 text-sm mt-1">Управляйте своими регулярными платежами</Text>
                </View>

                <Pressable
                    onPress={onAddSubscribeBtnPress}
                    className={"android:w-84 ios:w-84 web:md:w-96 py-3 px-4 rounded-xl text-white font-semibold text-lg relative overflow-hidden group transition-all duration-500 android:bg-orange-600 ios:bg-orange-600 web:bg-gradient-to-r web:from-orange-600 web:to-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:from-orange-500 hover:to-orange-600"}>
                    <Text className="text-white text-center font-semibold">
                        Добавить подписку
                    </Text>
                </Pressable>
            </View>

            {/* статистика */}

            <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

                {/* Всего в месяц */}
                <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-40">
                    <Text className="text-sm font-medium text-gray-500">Расходы в месяц</Text>

                    <View>
                        <Text className="text-3xl font-bold text-gray-900 mt-1">4 250 ₽</Text>
                        <View className="w-full bg-gray-100 rounded-full h-1.5">
                            <View className={`bg-indigo-600 h-1.5 rounded-full w-[${75}%]`}></View>
                        </View>
                        <Text className="text-xs text-gray-400 mt-2">Лимит бюджета: 6 000 ₽</Text>
                    </View>

                    {/* <div class="flex justify-between items-start mb-4">
                    <div>
                        <p class="text-sm font-medium text-gray-500">Расходы в месяц</p>
                        <h3 class="text-3xl font-bold text-gray-900 mt-1">4 250 ₽</h3>
                    </div>
                    <span class="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">+12%</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-1.5">
                    <div class="bg-indigo-600 h-1.5 rounded-full" style="width: 70%"></div>
                </div>
                <p class="text-xs text-gray-400 mt-2">Лимит бюджета: 6 000 ₽</p> */}
                </View>

                {/* <!-- Всего в год --> */}
                <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <Text>Всего в год</Text>
                    {/* <div class="flex justify-between items-start mb-4">
                        <div>
                            <p class="text-sm font-medium text-gray-500">Прогноз на год</p>
                            <h3 class="text-3xl font-bold text-gray-900 mt-1">51 000 ₽</h3>
                        </div>
                        <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">0%</span>
                    </div>
                    <p class="text-xs text-gray-400">Включая годовые платежи (Netflix, Adobe)</p> */}
                </View>

                <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <Text>еще что то</Text>
                    {/* <div class="flex justify-between items-start mb-4">
                        <div>
                            <p class="text-sm font-medium text-gray-500">Прогноз на год</p>
                            <h3 class="text-3xl font-bold text-gray-900 mt-1">51 000 ₽</h3>
                        </div>
                        <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">0%</span>
                    </div>
                    <p class="text-xs text-gray-400">Включая годовые платежи (Netflix, Adobe)</p> */}
                </View>
            </View>

            {/* Список подписок */}
            <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <Text className="text-lg font-semibold text-gray-900 mb-4">Активные подписки</Text>
                {/* Пример элемента подписки */}
                <Subscribe
                    name="Netflix"
                    payDate="15 мая"
                    cost="499"
                ></Subscribe>

                <Subscribe
                    name="YouTube Premium"
                    payDate="20 мая"
                    cost="199"
                ></Subscribe>

                <Subscribe
                    name="Spotify"
                    payDate="25 мая"
                    cost="169"
                ></Subscribe>
            </View>
        </View>
    )
}

export default MainPage
