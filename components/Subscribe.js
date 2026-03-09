import { View, Text } from 'react-native'

function Subscribe({name, payDate, cost}) {
    
    // NativeWind/TailwindCSS не может создавать классы динамически.
    // Мы должны предоставить полные имена классов в коде.
    // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    const colorMap = {
        red:    { bg: 'bg-red-100',    text: 'text-red-700'    },
        orange: { bg: 'bg-orange-100', text: 'text-orange-700' },
        amber:  { bg: 'bg-amber-100',  text: 'text-amber-700'  },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
        lime:   { bg: 'bg-lime-100',   text: 'text-lime-700'   },
        green:  { bg: 'bg-green-100',  text: 'text-green-700'  },
        emerald:{ bg: 'bg-emerald-100',text: 'text-emerald-700'},
        teal:   { bg: 'bg-teal-100',   text: 'text-teal-700'   },
        cyan:   { bg: 'bg-cyan-100',   text: 'text-cyan-700'   },
        sky:    { bg: 'bg-sky-100',    text: 'text-sky-700'    },
        blue:   { bg: 'bg-blue-100',   text: 'text-blue-700'   },
        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
        violet: { bg: 'bg-violet-100', text: 'text-violet-700' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-700' },
        fuchsia:{ bg: 'bg-fuchsia-100',text: 'text-fuchsia-700'},
        pink:   { bg: 'bg-pink-100',   text: 'text-pink-700'   },
        rose:   { bg: 'bg-rose-100',   text: 'text-rose-700'   },
    };
    
    const colorNames = Object.keys(colorMap);
    
    // Выбираем цвет на основе первого символа названия
    const colorIndex = name.charCodeAt(0) % colorNames.length;
    const colorName = colorNames[colorIndex];
    const { bg, text } = colorMap[colorName];

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