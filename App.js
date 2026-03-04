import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import "./global.css"


const Stack = createNativeStackNavigator();

// Экран 1
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Главная</Text>
      <Button title="Перейти" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

// Экран 2
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Детали</Text>
    </View>
  );
}

function Style() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  )
}

// Главный компонент
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Style">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Style" component={Style} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}