import { View, Text, Pressable, ScrollView } from "react-native"
import { useState } from "react"
import Subscribe from "../components/Subscribe"
import colorMap from '../components/colorsNativeWind'
import PieChartComp from "../components/PieChart"


function MainPage() {
    function onAddSubscribeBtnPress() {
        console.log("onAddSubscribeBtnPress")
    }

    const subscribes = [
        {
            nom: 1,
            name: "netflix",
            category: "Фильм",
            price: 1000,
            active: true,
            expires: "20 мая",
        },
        {
            nom: 2,
            name: "youtube",
            category: "Видео",
            price: 500,
            active: true,
            expires: "25 мая",
        },
        {
            nom: 3,
            name: "spotify",
            category: "Музыка",
            price: 300,
            active: false,
            expires: "10 апреля",
        },
        {
            nom: 4,
            name: "figma",
            category: "Дизайн",
            price: 800,
            active: true,
            expires: "1 июня",
        },
        {
            nom: 5,
            name: "adobe",
            category: "Дизайн",
            price: 1500,
            active: true,
            expires: "15 мая",
        },

    ]

    const pieData = [ //кактегория, данные, можно проссумировать рпи запросе в бд
        { value: 300, color: "#f97316", name: "Музыка" },
        { value: 800, color: "#fb923c", name: "Видео" },
        { value: 200, color: "#fdba74", name: "Облако" },
        { value: 400, color: "#fed7aa", name: "Доставка" }
    ]

    const monthlyData = [
        { value: 1200, lables: "Jan" },
        { value: 900, lables: "Feb" },
        { value: 1700, lables: "Mar" },
        { value: 1100, lables: "Apr" },
        { value: 2100, lables: "May" },
        { value: 1900, lables: "Jun" },
        { value: 1600, lables: "Jul" },
        { value: 1800, lables: "Aug" },
        { value: 2000, lables: "Sep" },
        { value: 2300, lables: "Oct" },
        { value: 2600, lables: "Nov" },
        { value: 2400, lables: "Dec" }
    ]

    const monthlyExpenses = 4250;
    const budgetLimit = 6000;
    const expensesPercentage = (monthlyExpenses / budgetLimit) * 100;

    const colorNames = Object.keys(colorMap);
    const colorIndex = subscribes[0].name.charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

    return (
        <ScrollView className="flex-1 p-6 bg-gray-50 px-10">
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

                <PieChartComp data={pieData} />

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
            <View className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subscribes.map((sub, index) => (
                    <Subscribe
                        key={index}
                        nom={sub.nom}
                        name={sub.name}
                        category={sub.category}
                        price={sub.price}
                        active={sub.active}
                        expires={sub.expires} />
                ))}
            </View>

        </ScrollView>
    )
}

export default MainPage
