import { View, Text, StyleSheet,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import { taskCollection } from '../utilities/Firebase';
import { getDocs } from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';


export default function NewTask() {

  //State 
  const [datosGuardados, setDatosGuardados] = useState(null);
  const [tasks, setTasks] = useState([]);

  //UseEffect
  useEffect(() => {
    fetchTasks();
  }, []);

  // useEffect(()=>{
  //   if (tasks.length) {
  //   }
  // },[tasks])


  //DB
  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(taskCollection);
      const tasksData = [];
      querySnapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() });
      });
      setTasks(tasksData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  //Function
  const handleElimite = async (taskId) => {
    try {
      const taskDocRef = doc(taskCollection, taskId);
      await deleteDoc(taskDocRef);
      console.log('Documento eliminado');
      // Realizar cualquier otra operación después de eliminar el documento
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={style.container}>
        <View style={style.box}>
          <Text style={style.title}>New Task</Text>
          <ScrollView style={style.scroll}>
          <View style={style.prueba}>
            {tasks.length > 0 ? (
              tasks.map((tarea) => (
                <View key={tarea.id}  style={style.containerTarea}>
                  <View style={style.containerNewTask}>
                    <Text  style={style.containerName}>
                      Name Task
                    </Text>
                    <Text style={style.containerText}>{tarea.task}</Text>
                    <Text style={style.containerName}>
                      Descripton of Task
                    </Text>
                    <Text style={style.containerText}>{tarea.descrition}</Text>
                  </View>
                  <View style={style.botones}>
                      <TouchableOpacity style={style.botonesEdit}>
                        <Text style={style.botonesText}>
                          Edit
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={style.botonesEliminate} onPress={(() => handleElimite(tarea.id))}>
                        <Text style={style.botonesText}>
                          Eliminate
                        </Text>
                      </TouchableOpacity>
                    </View>
                </View>
              ))
            ) : (
              <Text>Cargando tareas...</Text>
            )}
          </View>
          </ScrollView>
        </View>
        <View style={style.footer}>
          <Footer datosGuardados={datosGuardados} setDatosGuardados={setDatosGuardados} />
        </View>
    </View>
  )
}


const style = StyleSheet.create({

  container : {
    flex : 1,
    display : "flex",
    justifyContent : "space-between"
  },
  box : {
    paddingTop : 30,
    paddingBottom :  100
  },
  scroll : {
    position : "relative",
    zIndex :  1,
    
  },
  title : {
    paddingTop : 10,
    textAlign : "center",
    fontSize  : 20,
    textTransform :  "uppercase",
    fontWeight : "bold"
  },
  prueba : {
    padding : 20,
  },
  containerTarea : { 
    backgroundColor  : "#ff5d57",
    marginBottom  : 20,
    borderRadius :  10,
    display :"flex",
    padding  :10
  },
  containerNewTask: { 
    // backgroundColor  : "#ff5d57",
    // padding  : 10,
    // borderRadius :  10,
  },
  containerName : {
    fontSize  : 15,
    color : "white",
    fontWeight : "bold",
    textTransform : "uppercase"
  }, 
  containerText : {
    fontSize : 15,
    color : "white"
  },
  botones : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between",
    paddingTop  : 20
  },
  botonesEdit : {
    padding :10,
    width  : 150,
    display  :"flex",
    alignItems  :"center",
    justifyContent  : "center",
    backgroundColor : "#00b5b9",
    borderRadius:10
  },
  botonesEliminate : {
    padding :10,
    width  : 150,
    display  :"flex",
    alignItems  :"center",
    justifyContent  : "center",
    borderRadius:10,
    backgroundColor :  "#ff2121"
  },
  botonesText : {
    fontWeight : "bold",
    textTransform :"uppercase",
    color : "white"
  },
  footer : {
    position : "absolute",
    width : " 100%",
    bottom :  0,
    right :  0,
    zIndex :  2
  }
})