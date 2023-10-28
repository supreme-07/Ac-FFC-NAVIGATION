import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import UpdateScreen from "./screens/UpdateScreen";
import DeleteScreen from "./screens/DeleteScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Update" component={UpdateScreen} />
        <Tab.Screen name="Delete" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
