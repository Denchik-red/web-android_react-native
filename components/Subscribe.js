import { View, Text } from 'react-native'
import { MotiView } from 'moti';
import colorMap from './colorsNativeWind'

function Subscribe({ nom, icon, name, category, price, active, expires }) {



    // const { nom, icon, name, category, price, active, expires } = {
    //     nom: 1,
    //     name: "netflix",
    //     category: "Фильм",
    //     price: 1000,
    //     active: true,
    //     expires: "20 мая",
    // }

    // Выбираем цвет на основе первого символа названия
    const colorNames = Object.keys(colorMap);
    const colorIndex = name[0].charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

    const delay = nom * 150
    return (
        // <View className="flex-row justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
        //     <View className="flex-row items-center">
        //         <View className={`w-10 h-10 rounded-full flex justify-center items-center mr-3 ${bg}`}>
        //             <Text className={`font-bold ${text}`}>{name.charAt(0).toUpperCase()}</Text>
        //         </View>
        //         <View>
        //             <Text className="font-medium text-gray-800">{name}</Text>
        //             <Text className="text-sm text-gray-500">Следующий платеж: {payDate}</Text>
        //         </View>
        //     </View>
        //     <Text className="font-semibold text-gray-900">{cost} ₽</Text>
        // </View>
        <MotiView
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0, }}
            transition={{ type: 'timing', delay, duration: 500, }}
            className="w-96 sm:w-120 lg:w-96 p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800
      web:hover:shadow-xl web:hover:scale-[1.02] transition-all duration-200 relative overflow-hidden shadow-md">

            <View className="flex-row justify-between items-start">

                <View className="flex-1 flex-row  flex justify-between items-center">
                    <View className="flex-row gap-3 items-center">

                        {/* <View className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-800 items-center justify-center">
                            <View source={{ uri: icon }} className="w-6 h-6" resizeMode="contain" ></View>

                        </View> */}
                        <View className={`w-10 h-10 rounded-full flex justify-center items-center mr-3 ${bg}`}>
                            <Text className={`font-bold ${text}`}>{name.charAt(0).toUpperCase()}</Text>
                        </View>
                        <View>
                            <Text className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                {name}
                            </Text>
                            <Text className="text-sm text-zinc-400 dark:text-zinc-400">
                                {category}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text className={`text-2xl font-bold ${active ? "text-orange-500" : "text-zinc-400"}`}>
                            {price} ₽
                        </Text>
                    </View>
                </View>

            </View>

            <View className="flex-row justify-between items-end mt-4">
                {active ?
                    <Text className="text-sm text-green-600 dark:text-green-400 mt-2">
                        Активна до {expires}
                    </Text>
                    : ""}

                <View className={`px-3 py-2 rounded-full ${active ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30 flex-1"}`}>
                    <Text
                        className={`text-xs font-medium ${active ? "text-green-700 dark:text-green-400" : "text-red-600 text-center"}`}>
                        {active ? "Активна" : "Неактивна"}
                    </Text>
                </View>
            </View>
        </MotiView>

    )
}

export default Subscribe