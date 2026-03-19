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

    const scheme = useColorScheme();
    const isDark = scheme === 'dark';

    function onAddSubscribeBtnPress() {
        console.log("onAddSubscribeBtnPress")
        setIsModalVisible(true)
    }

    const subscribes = [
        { nom: 1, name: "netflix", category: "Фильм", price: 1000, active: true, expires: "20 мая" },
        { nom: 2, name: "youtube", category: "Видео", price: 500, active: true, expires: "25 мая" },
        { nom: 3, name: "spotify", category: "Музыка", price: 300, active: false, expires: "10 апреля" },
        { nom: 4, name: "figma", category: "Дизайн", price: 800, active: true, expires: "1 июня" },
        { nom: 5, name: "adobe", category: "Дизайн", price: 1500, active: true, expires: "15 мая" },
    ];

    const pieData = [
        { value: 300, color: "#f97316", name: "Музыка" },
        { value: 800, color: "#fb923c", name: "Видео" },
        { value: 200, color: "#fdba74", name: "Облако" },
        { value: 400, color: "#fed7aa", name: "Доставка" }
    ];

    const monthlyData = [
        { value: 1200, lables: "Jan" }, { value: 900, lables: "Feb" },
        { value: 1700, lables: "Mar" }, { value: 1100, lables: "Apr" },
        { value: 2100, lables: "May" }, { value: 1900, lables: "Jun" },
        { value: 1600, lables: "Jul" }, { value: 1800, lables: "Aug" },
        { value: 2000, lables: "Sep" }, { value: 2300, lables: "Oct" },
        { value: 2600, lables: "Nov" }, { value: 2400, lables: "Dec" }
    ];

    // Динамические цвета для карточки "Ближайший платеж"
    const colorNames = Object.keys(colorMap);
    const colorIndex = subscribes[0].name.charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

    return (
        <ScrollView 
            key={scheme} // Принудительная перерисовка при смене темы
            className={`flex-1 p-6 px-10 ${isDark ? 'bg-black' : 'bg-zinc-50'}`}
        >
            {/* Хедер */}
            <View className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <View>
                    <Text className={`text-2xl font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                        Мои подписки
                    </Text>
                    <Text className={`text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Управляйте своими регулярными платежами
                    </Text>
                </View>

                <Pressable
                    onPress={onAddSubscribeBtnPress}
                    className="android:w-84 ios:w-84 web:md:w-96 py-3 px-4 rounded-xl bg-orange-600 shadow-lg shadow-orange-500/30 active:opacity-80"
                >
                    <Text className="text-white text-center font-semibold text-lg">
                        Добавить подписку
                    </Text>
                </Pressable>
            </View>

            {/* Статистика (Flexbox вместо Grid для стабильности) */}
            <View className="flex flex-row flex-wrap justify-between gap-4 mb-8">
                
                {/* График 1 */}
                <View className="w-full lg:w-[32%]">
                    <ExpenseChart data={monthlyData} />
                </View>

                   {/* График 2 */}
                <View className="w-full lg:w-[32%]">
                    <PieChartComp data={pieData} />
                </View>

                {/* Ближайший платеж */}
                <View className={`w-full lg:w-[32%] p-6 rounded-2xl border shadow-sm flex flex-row justify-between items-center ${isDark ? 'bg-zinc-800 border-zinc-700 shadow-zinc-950' : 'bg-white border-zinc-100 shadow-gray-100'}`}>
                    <View>
                        <Text className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Ближайший платеж</Text>
                        <Text className={`text-3xl font-bold mt-1 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Завтра</Text>
                    </View>
                    <View className={`w-14 h-14 rounded-full flex justify-center items-center ${bg}`}>
                        <Text className={`font-bold text-xl ${text}`}>
                            {subscribes[0].name.charAt(0).toUpperCase()}
                        </Text>
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