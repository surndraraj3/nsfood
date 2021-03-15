import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import SearchBar from "../Components/searchbar"

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#e23744"
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};




const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Home', 
           }} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };