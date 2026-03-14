import { View, Text, Platform, useColorScheme } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { useMemo } from "react"
import { MotiView } from 'moti'

export default function PieChartComp({ data }) {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';

    // Определяем цвета явно
    const bgColor = isDark ? "#27272a" : "#ffffff";
    const totalExpenses = data.reduce((sum, item) => sum + item.value, 0);

    const chartData = data.map((item) => ({
        name: item.name,
        population: item.value,
        color: item.color,
        legendFontColor: isDark ? "#a1a1aa" : "#71717a",
        legendFontSize: 12,
    }));

    // Формируем строку классов без использования префикса dark: 
    // чтобы NativeWind не путался в приоритетах на вебе
    const containerClasses = `w-full p-6 rounded-2xl border shadow-lg relative ${isDark
            ? "bg-zinc-800 border-zinc-800 shadow-zinc-950"
            : "bg-white border-zinc-200 shadow-gray-100"
        }`;

    return (
        <MotiView
            key={`pie-chart-${scheme}`} // Полная перерисовка при смене темы
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', delay: 100, duration: 500 }}
            className={containerClasses}
        >
            <Text className={`text-2xl font-bold mb-6 ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
                Расходы по категориям
            </Text>

            <View className="flex justify-center items-center relative">
                <View className="ios:w-56 android:w-56 web:w-48">
                    <PieChart
                        data={chartData}
                        width={Platform.OS === "web" ? 300 : 310}
                        height={220}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="20"
                        hasLegend={false}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(249, 115, 22, ${opacity})`,
                            // ИСПОЛЬЗУЕМ ДИНАМИЧЕСКИЙ ЦВЕТ ФОНА
                            backgroundGradientFrom: bgColor,
                            backgroundGradientTo: bgColor,
                        }}
                        avoidFalseZero
                        center={[0, 0]}
                    />
                </View>

                {/* Центральный круг с суммой "Всего" */}
                <View
                    style={{ backgroundColor: bgColor }}
                    className={`absolute rounded-full w-24 h-24 shadow-sm elevation-3 flex justify-center items-center border ${isDark ? 'border-zinc-700' : 'border-zinc-50'}`}
                >
                    <Text className={`text-sm font-semibold ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                        Всего
                    </Text>
                    <Text className="text-lg font-bold text-orange-500">
                        {totalExpenses.toLocaleString()} ₽
                    </Text>
                </View>
            </View>

            {/* Легенда / Категории */}
            <View className="mt-6 flex-wrap flex-row justify-center gap-2">
                {data.map((item, index) => (
                    <View
                        key={index}
                        className={`flex-row items-center gap-2 px-3 py-2 rounded-lg ${isDark ? "bg-zinc-900" : "bg-zinc-100"
                            }`}
                    >
                        <View style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full" />
                        <Text className={`text-sm font-medium ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
                            {item.name}
                        </Text>
                        <Text className={`text-sm font-semibold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
                            {Math.round((item.value / totalExpenses) * 100)}%
                        </Text>
                    </View>
                ))}
            </View>
        </MotiView>
    );

}