import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Menu = (props) => {
    // Redirect
    const navigation = useNavigation()

    const {menu, setMenu} = props



    const handleMenu = e =>{
        setMenu(!menu)
    }

    const handleRedirect = (name)=>{
        navigation.navigate(name)
        setMenu(!menu)
    }

  return (
    <View style={style.conteiner}>
        <View style ={style.caja}>
            <Text style={style.title}>Selection Page</Text>
            <TouchableOpacity onPress={handleMenu}>
                <Image source={require("../../assets/Closed.png")} style={style.img}/>
            </TouchableOpacity>      
        </View>


        <View style={style.menu}>
            <TouchableOpacity  onPress={()=> handleRedirect("Home")} style={style.nav}>
                <Image source={require("../../assets/Home.png")} style={style.img}/>
                <Text style={style.options}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> handleRedirect("Tips")} style={style.nav}>
                <Image source={require("../../assets/Tips.png")} style={style.img}/>    
                <Text style={style.options}>
                    Tips
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> handleRedirect("NewTask")} style={style.nav}>
                <Image source={require("../../assets/Task.png")} style={style.img}/>
                <Text style={style.options}>
                    NewTask
                </Text>
            </TouchableOpacity>
        </View>                                  
    </View>
  )
}

const style = StyleSheet.create({
    conteiner : {
        padding : 20,
    },
    title : { 
        textTransform : "uppercase",
        fontWeight : "bold",
        fontSize : 25,
        textAlign : "center"
    },
    caja : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"
    },
    menu : {
        display : "flex",
        gap : 10,
        paddingTop :30
    },
    nav : {
        display : "flex",
        flexDirection : "row-reverse",
        alignItems : "center",
        alignContent : "center",
        justifyContent : "space-between",
        padding : 15,
        borderRadius : 10,
        backgroundColor : "#F24C3D"
    },
    options : {
        fontSize : 15,
        fontWeight : "bold",
        textTransform : "uppercase",
        color : "white"
    },
    img : {
        height : 25,
        width :  25,
    },
})

export default Menu