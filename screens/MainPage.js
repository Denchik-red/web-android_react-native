import { View, Text, Pressable, ScrollView } from "react-native"
import { useState } from "react"
import Subscribe from "../components/Subscribe"
import colorMap from '../components/colorsNativeWind'


function MainPage() {
    function onAddSubscribeBtnPress() {
        console.log("onAddSubscribeBtnPress")
    }

    const subscribes = [
        {
            name: "Netflix",
            payDate: "15 мая",
            cost: "499"
        
        },
        {
            name: "YouTube Premium",
            payDate: "20 мая",
            cost: "199"
        },
        {
            name: "Spotify",
            payDate: "25 мая",
            cost: "169"
        },
        {
            name: "Apple Music",
            payDate: "10 июня",
            cost: "169"
        },
        {
            name: "Tinkoff Pro",
            payDate: "1 июня",
            cost: "299"
        },
        {
            name: "Yandex Plus",
            payDate: "8 июня",
            cost: "299"
        },
        {
            name: "VK Combo",
            payDate: "12 июня",
            cost: "149"
        },
        {
            name: "Okko",
            payDate: "3 июня",
            cost: "399"
        },
        {
            name: "Amediateka",
            payDate: "22 мая",
            cost: "599"
        },
        {
            name: "Kinopoisk HD",
            payDate: "18 июня",
            cost: "269"
        },
        {
            name: "Google One",
            payDate: "7 июня",
            cost: "159"
        },
        {
            name: "Microsoft 365",
            payDate: "28 мая",
            cost: "359"
        },
        {
            name: "Setapp",
            payDate: "4 июня",
            cost: "999"
        },
        {
            name: "HeadHunter",
            payDate: "19 мая",
            cost: "1999"
        },
        {
            name: "Skillbox",
            payDate: "14 июня",
            cost: "2500"
        },
        {
            name: "GeekBrains",
            payDate: "29 мая",
            cost: "2700"
        },
        {
            name: "Netology",
            payDate: "17 июня",
            cost: "3000"
        }
    ]

    const monthlyExpenses = 4250;
    const budgetLimit = 6000;
    const expensesPercentage = (monthlyExpenses / budgetLimit) * 100;

    const colorNames = Object.keys(colorMap);
    const colorIndex = subscribes[0].name.charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

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
                        <Text className="text-3xl font-bold text-gray-900 mt-1">{monthlyExpenses.toLocaleString('ru-RU')} ₽</Text>
                        <View className="w-full bg-gray-100 rounded-full h-1.5">
                            <View className={`bg-indigo-600 h-1.5 rounded-full`} style={{ width: `${expensesPercentage}%` }}></View>
                        </View>
                        <Text className="text-xs text-gray-400 mt-2">Лимит бюджета: {budgetLimit.toLocaleString('ru-RU')} ₽</Text>
                    </View>
                </View>

                {/* <!-- Всего в год --> */}
                <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <Text className="text-sm font-medium text-gray-500">Прогноз на год</Text>
                    <View>
                        <Text className="text-3xl font-bold text-gray-900 mt-1">51 000 ₽</Text>
                    </View>
                </View>

                <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <View>
                        <Text className="text-sm font-medium text-gray-500">Ближайший платеж</Text>
                        <Text className="text-3xl font-bold text-gray-900 mt-1">Завтра</Text>
                    </View>
                    <View className={`w-10 h-10 rounded-full flex justify-center items-center mr-3 ${bg}`}>
                        <Text className={`font-bold ${text}`}>{subscribes[0].name.charAt(0).toUpperCase()}</Text>
                    </View>
                </View>
            </View>

            {/* Список подписок */}
            <Text className="text-lg font-semibold text-gray-900 mb-4">Активные подписки</Text>
            <ScrollView className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                {subscribes.map((sub, index) => (
                    <Subscribe key={index} name={sub.name} payDate={sub.payDate} cost={sub.cost} />
                ))}
            </ScrollView>
        </View>
    )
}

export default MainPage
