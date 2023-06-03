import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Footer() {
  return (
    <View style={style.container}>
        <TouchableOpacity>
            <Image 
            style={style.imgMenu}
            source={require("../../assets/Menu.png")}
        />
        </TouchableOpacity>

        <View style={style.add}>
            <TouchableOpacity>
                <Image 
                    style={style.prueba}
                    source={require("../../assets/Add.png")}
                />
            </TouchableOpacity>
        </View>
        <View style={style.caja}>
            <TouchableOpacity>
                <Image
                    style={style.img}
                    source={require("../../assets/Search.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={style.img}
                    source={require("../../assets/Sound.png")}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        padding : 20,
        backgroundColor : "#db4c3f",
        display : "flex",
        flexDirection :"row",
        justifyContent : "space-between",
        alignItems : "center",
        position : "relative"
    },

    add : {
        display : "flex",
        textAlign : "center" ,
        justifyContent : "center",
        position : "relative",
        backgroundColor : "white",
        
    },
    prueba : {
        display : "flex",
        height : 30,
        width :30,
        position :"absolute",
        backgroundColor : "#db4c3f",
        padding : 30,
        borderRadius :31,
        borderWidth : 3,
        borderColor : "white",
        bottom : 0,
    },
    caja : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        gap : 15

    },  
    imgMenu : {
        height : 25,
        width : 25
    },
    img : {
        height : 30,
        width :30
    }
})