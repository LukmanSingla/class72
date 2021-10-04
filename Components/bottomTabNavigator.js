import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "../Screens/Search";
import TransactionScreen from "../Screens/Transaction";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "gray",
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icons;
              if (route.name === "Transaction") {
                icons = "book";
              } else if (route.name === "Search") {
                icons = "search";
              }
              return <Ionicons name={icons} size={size} color={color} />;
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Transaction" component={TransactionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
