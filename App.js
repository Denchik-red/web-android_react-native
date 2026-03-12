import "./global.css"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import AboutPage from './screens/AboutPage';
import AuthorizationPage from './screens/AuthorizationPage';
import AppLogo from './components/AppLogo';
import MainPage from "./screens/MainPage";

const Stack = createNativeStackNavigator();

// домашний экран
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Главная</Text>
      <Button title="Перейти" onPress={() => navigation.navigate('Authorization')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={({ navigation }) => ({
          title: "",
          headerLeft: () => {
            return (
              <AppLogo onClickAction={() => navigation.navigate('About')}></AppLogo>
            )
          },
          headerTransparent: true
        })}>
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Authorization" component={AuthorizationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}