import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Copa from "./Screens/Copa";
import { Ionicons } from "@expo/vector-icons";
import EstadiosScreen from "./Screens/Estadios";
import Brasil from "./Screens/Brasil";
import Estatisticas from "./Screens/Estatisticas";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Copa-2022"
            component={Copa}
            options={{
              title: "Inicio",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "white",
              },
              tabBarInactiveBackgroundColor: "white",
              tabBarActiveBackgroundColor: "black",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
           name="Estádios" 
           component={EstadiosScreen}
           options={{
            title: "Estádios",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "white",
            },
            tabBarInactiveBackgroundColor: "white",
            tabBarIcon: ({ color, size }) => (
              <Ionicons  name="map" color={color} size={size} />
            ),
          }}
            />

          <Tab.Screen
           name="Brasil" 
           component={Brasil}
           options={{
            title: "Brasil",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
            },
            tabBarInactiveBackgroundColor: "white",
            tabBarIcon: ({ color, size }) => (
              <Ionicons  name="football" color={color} size={size} />
            ),
          }}
            />

          <Tab.Screen
           name="Estatísticas"
            component={Estatisticas}
            options={{
              title: "Estatísticas",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "white",
              },
              tabBarInactiveBackgroundColor: "white",
              tabBarIcon: ({ color, size }) => (
                <Ionicons  name="stats-chart" color={color} size={size} />
              ),
            }}
            
            
           />
        
        
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
