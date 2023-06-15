import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Modal } from 'react-native'
import Menu from './Menu'
import Task from './Task'


export default function Footer(props) {

    //Props
    const {task,setTask, descrition, setDescrition, date, setDate,datosGuardados,setDatosGuardados} = props
    // console.log(datosGuardados, 'en el fooe')
    
    //State
    const [menu, setMenu] = useState(false)
    const [add, setAdd] = useState(false)

    //Function
    const handleMenu = e => {
        setMenu(!menu)


    }

    const handleAdd = e=>{
        setAdd(!add)
    }



    return (
        <View style={style.container}>
            <TouchableOpacity onPress={handleMenu}>
                <Image
                    style={style.imgMenu}
                    source={require("../../assets/Menu.png")}
                />
            </TouchableOpacity>

            <View style={style.add}>
                <TouchableOpacity onPress={handleAdd} style={style.prueba} >
                    <Image
                        style={style.mas}
                        source={require("../../assets/Add.png")}
                    />
                </TouchableOpacity>
            </View>

            <View style={style.caja}>
                <TouchableOpacity onPress={handleAdd}>
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

            {
                menu ?
                    <Modal visible={menu} animationType="slide" >
                        <Menu menu={menu} setMenu={setMenu} />
                    </Modal>
                    : false
            }

            {
                add ? 
                <Modal visible={add} animationType="slide">
                    <Task add={add} setAdd={setAdd} datosGuardados={datosGuardados} setDatosGuardados={setDatosGuardados}/>
                </Modal>
                :false
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#db4c3f",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },

    add: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "white",
        zIndex : 1
    },
    prueba: {
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        position: "absolute",
        backgroundColor: "#db4c3f",
        borderRadius: 31,
        borderWidth: 2,
        borderColor: "white",
        bottom: 0,
        zIndex : 2
    },
    mas : {
        width : "100%",
        height  : "100%",
        padding : 1,
        padding: 30,
    },
    caja: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15

    },
    imgMenu: {
        height: 25,
        width: 25
    },
    img: {
        height: 30,
        width: 30
    }
})