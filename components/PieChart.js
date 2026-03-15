import { View, Text, Platform } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { MotiView } from 'moti'

export default function PieChartComp({ data }) {
    const totalExpenses = data.reduce((sum, item) => sum + item.value, 0);

    const chartData = data.map((item) => ({
        name: item.name,
        population: item.value,
        color: item.color,
        legendFontColor: "#71717a",
        legendFontSize: 12,
    }));


    return (
        <MotiView
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0, }}
            transition={{ type: 'timing', delay: 100, duration: 500, }}
            className="w-full sm:w-120 lg:w-96 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 bg-white shadow-lg transition duration-500 dark:bg-zinc-800 dark:shadow-zinc-950 relative">
            <Text className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
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
                            backgroundGradientFrom: "#27272a",
                            backgroundGradientTo: "#27272a",
                        }}
                        avoidFalseZero
                        center={[0, 0]}
                    />
                </View>

                <View className="absolute rounded-full w-25 h-25 bg-white shadow-sm elevation-3 flex justify-center items-center">
                    <Text className="text-lg text-zinc-900 dark:text-zinc-700 font-semibold">Всего</Text>
                    <Text className="text-lg font-bold text-orange-500">
                        {totalExpenses.toLocaleString()} ₽
                    </Text>
                </View>
            </View>

            <View className="mt-6 flex-wrap flex-row justify-center gap-2">
                {data.map((item, index) => (
                    <View
                        key={index}
                        className="flex-row items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 bg-zinc-100 dark:bg-zinc-900">
                        <View
                            style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full" />

                        <Text className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                            {item.name}
                        </Text>

                        <Text className="text-sm font-semiboldtext-zinc-900 dark:text-zinc-100">
                            {Math.round((item.value / totalExpenses) * 100)}%
                        </Text>
                    </View>
                ))}
            </View>

        </MotiView>
    );
}