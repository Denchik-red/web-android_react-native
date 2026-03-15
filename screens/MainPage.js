import { View, Text, Pressable, ScrollView, useColorScheme } from "react-native"
import { useState } from "react"
import Subscribe from "../components/Subscribe"
import colorMap from '../components/colorsNativeWind'
import PieChartComp from "../components/PieChart"
import ExpenseChart from "../components/YearSpendChart"
import ModalWindow from "../components/ModalWindow"
import ModalAddSubContent from "../components/ModalAddSubContent"


function MainPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function onAddSubscribeBtnPress() {
        console.log("onAddSubscribeBtnPress")
        setIsModalVisible(true)
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

    const scheme = useColorScheme();
    const colorNames = Object.keys(colorMap);
    const colorIndex = subscribes[0].name.charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

    return (
        // <ScrollView className={`flex-1 p-6 px-10 border-zinc-200 dark:border-zinc-800 transition duration-500 dark:bg-black bg-zinc-50 text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100`}>         
        <ScrollView className=" flex-1 dark:bg-black bg-zinc-50 web:selection:bg-orange-500 selection:text-zinc-100 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)]
        duration-500 flex bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-zinc-200)] dark:[--pattern-fg:var(--color-white)]/20">
            <View className="w-12/12 md:w-11/12 lg:w-5/6 mx-auto dark:bg-zinc-900 flex flex-col px-4 sm:px-10 md:px-20 bg-white ios:pt-12 android:pt-12">

            <View className="mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    <View>
                        <Text className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Мои подписки</Text>
                        <Text className="text-base md:text-lg mt-1 text-zinc-900 dark:text-zinc-100">Управляйте своими регулярными платежами</Text>
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
                <View className="flex flex-row flex-wrap gap-4 mb-8 justify-center">


                    {/* <!-- Всего в год --> */}
                    <ExpenseChart data={monthlyData}/>

                    <PieChartComp data={pieData} />
                    {/* Всего в месяц */}
                    <View className="w-full sm:w-120 lg:w-96 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 bg-white shadow-lg transition duration-500 dark:bg-zinc-800 dark:shadow-zinc-950 relative">
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
                {/* <Text className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Активные подписки</Text> */}
                <View className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 p-6 flex flex-row flex-wrap justify-center gap-4">
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
            </View>
            <ModalWindow isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                {/* Emoji list component will go here */}
                <ModalAddSubContent mode={"create"} initialData={subscribes[0]} onClose={() => setIsModalVisible(false)}/>
                {/*форма создания и редактироания, передается состоние и изначальные данные если они нужны  */}
            </ModalWindow>        
        </ScrollView>
    )
}

export default MainPage
