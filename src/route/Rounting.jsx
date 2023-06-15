import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../page/Home"
import Tips from "../page/Tips"
import NewTask from "../page/NewTask"

// Navigation
const Stack = createNativeStackNavigator();


export default function Rounting() {

  //Props 

  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tips" component={Tips}/>
        <Stack.Screen name="NewTask" component={NewTask} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}