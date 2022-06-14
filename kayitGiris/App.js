import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { colors } from "./config/constant";
import SingUp from "./screens/SingUp.js";
import Chat from "./screens/Chat";
import { createStackNavigator } from "@react-navigation/stack";



const Home = () => {
  return (
    <SafeAreaView>
      <Chats/>
      {/* <Chat/> */}
    </SafeAreaView>
  )
}

const Settin = () => {
  return (
    <SafeAreaView>
     <Settings/>
    </SafeAreaView>
  )
}

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Ev') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'Ayarlar') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        // tabBarInactiveTintColor: 'gray',
      })}      
      >
        <Tabs.Screen name="Ev" component={Home} />
        <Tabs.Screen name="Ayarlar" component={Settin} />
        <Tabs.Screen name="Kayit Ol" component={SingUp} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App;
