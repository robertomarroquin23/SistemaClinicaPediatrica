import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "./ProfileScreen";
import UserInterfacesScreen from "./UserInterfacesScreen";

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
            <Tab.Screen
                name="UserInterface"
                component={UserInterfacesScreen}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};
export default AppTab;
