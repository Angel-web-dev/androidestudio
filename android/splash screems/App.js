import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Calculadora") {
              iconName = "calculator";
            } else if (route.name === "Historial") {
              iconName = "time";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Calculadora" component={HomeScreen} />
        <Tab.Screen name="Historial" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
