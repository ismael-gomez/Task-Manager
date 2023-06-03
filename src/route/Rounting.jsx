import React from "react"
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import SubjectsReducer from "../hook/SubjectsReducer";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../page/Home"
import Tips from "../page/Tips"
import NewTask from "../page/NewTask"


// Redux Store
const store = legacy_createStore(SubjectsReducer)

// Navigation
const Stack = createNativeStackNavigator();



export default function Rounting() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tips" component={Tips}/>
            <Stack.Screen name="NewTask" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}