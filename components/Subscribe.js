import { View, Text } from 'react-native'
import colorMap from './colorsNativeWind'

function Subscribe({name, payDate, cost}) {
    
    // Выбираем цвет на основе первого символа названия
    const colorNames = Object.keys(colorMap);
    const colorIndex = name[0].charCodeAt(0) % colorNames.length;
    const { bg, text } = colorMap[colorNames[colorIndex]];

    return (
        <View className="flex-row justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
            <View className="flex-row items-center">
                <View className={`w-10 h-10 rounded-full flex justify-center items-center mr-3 ${bg}`}>
                    <Text className={`font-bold ${text}`}>{name.charAt(0).toUpperCase()}</Text>
                </View>
                <View>
                    <Text className="font-medium text-gray-800">{name}</Text>
                    <Text className="text-sm text-gray-500">Следующий платеж: {payDate}</Text>
                </View>
            </View>
            <Text className="font-semibold text-gray-900">{cost} ₽</Text>
        </View>
        
    )
}

export default Subscribe