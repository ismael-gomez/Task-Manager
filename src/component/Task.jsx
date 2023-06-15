import { View, Text,TouchableOpacity, Image, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddData, { taskCollection } from "../utilities/Firebase"
import { getDocs } from 'firebase/firestore'

const Task = (props) => {
    //Props
    const {add, setAdd,datosGuardados,setDatosGuardados } = props
    
    //State
    const [task, setTask] = useState("")
    const [descrition, setDescription] = useState("")
    const [mensaje, setMensaje] = useState("")

    

    //Function
    const handleAdd = e=>{
        setAdd(!add)
    }

    const handleTask = ()=>{
        if (task === "" || descrition === "" ) {
            setMensaje("Tienes campos vacios")
            return
        }
        const nuevaTarea = {
            task, 
            descrition,
        }
        AddData(nuevaTarea)

        setTask("")
        setDescription("")
        setMensaje("")
        
    }

  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>New Task</Text>
            <TouchableOpacity onPress={handleAdd} >
                <Image source={require("../../assets/Closed.png")} style={styles.img}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerMensaje}>
        {mensaje === "" ? false : <Text style={styles.mensaje}>{mensaje}</Text>}
        </View>
        <SafeAreaView style={styles.form}>
            <View>
                <Text>
                    Name Task
                </Text>
                <TextInput placeholder='Task Name' style={styles.input} onChangeText={text => setTask(text)} value={task
                }/>
            </View>

            <View>
                <Text>
                    Description 
                </Text>
                <TextInput placeholder='Description' style={styles.input} onChangeText={titulo => setDescription(titulo)} value={descrition}/>
            </View>

            <View style={styles.dateBox}>
                <Text>
                    Task Date
                </Text>            
            </View>

            <View style={styles.buttonBox}>
                <TouchableOpacity style ={styles.button} onPress={handleTask} >
                    <Text style={styles.buttonTitle}>
                        Add task
                    </Text>
                </TouchableOpacity> 
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :  1,
        padding :  25,
    },
    box : {
        display :  "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    title : {
        fontWeight : "bold",
        fontSize : 25,
        textTransform : "uppercase"
    },
    containerMensaje: {},
    mensaje : {
        padding : 10,
        fontSize :  20,
        textAlign : "center",
        textTransform : "uppercase",
        color:"white",
        borderRadius :10,
        marginTop : 20,
        backgroundColor : "#e72313",
    },
    form : {
        paddingTop  :20
    },

    input : {
        borderWidth :  1,
        padding : 10,
        borderRadius  :10,
    },
    dateBox : {
        width : "100%",
    },
    buttonBox : {
        paddingTop : 20
    },
    button : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#F24C3D",
        padding : 15,
        borderRadius : 10
    },
    buttonTitle : {
        textTransform : "uppercase",
        fontWeight : "bold",
        fontSize : 15,
        color : "white"
    },
    img : {
        width : 25,
        height :  25,
    }
})


export default Task