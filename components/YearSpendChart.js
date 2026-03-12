import { View, Text, ScrollView, Platform, useColorScheme } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useState, useRef } from "react";
import {MotiView} from 'moti'
 

export default function ExpenseChart({ data }) {
  const [tooltip, setTooltip] = useState(null);
  const scrollViewRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const chartData = data.map(item => item.value);
  const chartLabels = data.map(item => item.lables);
  const scheme = useColorScheme();
  let allExpenses = 0;
  chartData.forEach(function(number) { allExpenses += number; });
  const chartWidth = Math.max(600, data.length * (Platform.OS === "web" ? 200 : 50));

  return (
    <MotiView
      from={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0,}}
      transition={{ type: 'timing', delay:200, duration: 500,}}
      className="w-full py-6 pr-1 web:p-6 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 bg-white shadow-lg
    transition duration-500 overflow-hidden gap-6 dark:bg-zinc-800 dark:shadow-zinc-950">

      <View className="flex flex-col dark:bg-zinc-800 ios:px-6 android:px-6">
        <Text className="text-lg font-light text-zinc-700 dark:text-zinc-100 text-start">
          Всего за год
        </Text>

        <Text className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 text-start">
          {allExpenses} ₽
        </Text>
      </View>
      <View>
        <ScrollView 
          ref={scrollViewRef}
          horizontal 
          showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
          onScroll={(event) => {
            setScrollX(event.nativeEvent.contentOffset.x);
            setTooltip(null);
          }}
          scrollEventThrottle={16}
          className="dark:bg-zinc-800 -translate-x-2 flex-1">

            <LineChart
              data={{ labels: chartLabels, datasets: [{  data: chartData  }]}}
              width={chartWidth}
              height={260}
              bezier
              withDots
              withShadow

              chartConfig={{
                backgroundGradientFrom: scheme === "dark" ? "#27272a" : "#ffffff",
                backgroundGradientTo: scheme === "dark" ? "#27272a" : "#ffffff",
                
                decimalPlaces: 0,

                color: () => "#f97316",
                labelColor: () => scheme === "dark" ? "#f4f4f5" : "#71717a", 
               propsForLabels: {
                  fontSize: 14
                },
                

                fillShadowGradient: "#f97316",
                fillShadowGradientOpacity: scheme === "dark"? 0.5 : 0.25,

                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#f97316"
                },

                propsForBackgroundLines: {
                  stroke: "#e4e4e7",
                  strokeWidth: 1,
                  strokeDasharray: "0"
                }
              }}
              
              onDataPointClick={({ index, x, y, value }) => {
              setTooltip({
                index,
                value,
                x: x - scrollX - 40,
                y: y - 60, 
                label: chartLabels[index]
              });
            }}
            />
          </ScrollView>

          {tooltip && (
            <View style={{
                position: "absolute",
                left: tooltip.x,
                top: tooltip.y
              }} className="px-3 py-2 rounded-lg bg-zinc-900">
              <Text className="text-white text-xs">
                {chartLabels[tooltip.index]}
              </Text>

              <Text className="text-orange-400 font-semibold">
                {chartData[tooltip.index]} ₽
              </Text>
            </View>
          )}

      </View>
    </MotiView>
  );
}