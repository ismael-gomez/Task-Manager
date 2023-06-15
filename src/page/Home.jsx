import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Image } from 'react-native';
import Footer from '../component/Footer';
 

export default function Home() {
    // State 
    const [task, setTask] = useState("")
    const [descrition, setDescription] = useState("")
    const [date, setDate] = useState("")


  return (
    <View style={styles.caja}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home</Text>
        <ScrollView style={styles.scroll}>
          <View style={styles.box}>
          <View style={styles.scrollBox}>
              <Text style={styles.scrollTitle}>
                Personal goal-setting tips:
              </Text>
              <Text>
                Part of the process for how to set life goals should be deciding what inspires you and what your values are. You should be passionate about your goals if you want to achieve them in the long run.
                Your goals should be meaningful to you and provide you with a sense of pride once you meet them.
              </Text>
              <Image 
                source={{uri : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dfSbS9NyPY86Rlck425EAAHaE6%26pid%3DApi&f=1&ipt=e45bf0d1763b6156c1bfebb4cb280d32be44a3762aa2ab032d835b30ffdf8de8&ipo=images"}} 
                style={styles.image}
              />
            </View>

            <View style={styles.scrollBox}>
              <Text style={styles.scrollTitle}>
                Set goals you can control:
              </Text>
              <Text>
                If your goal is based on something outside of your control, you won’t be able to control whether or not you actually achieve it.
                Your personal goals shouldn’t be dependent on other people. They also shouldn’t be reliant on external factors that you have no control over.
                Be realistic about what you can and can’t be directly responsible for.
              </Text>
              <Image 
                source={{uri : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rypRX5g6IAahCxVrJ3iiGgHaGL%26pid%3DApi&f=1&ipt=0eabc202e2864dcded272794612b50b204aae6bd6939dbd09fd8d244f57c476b&ipo=images"}} 
                style={styles.image}
              />
            </View>

            <View style={styles.scrollBox}>
              <Text style={styles.scrollTitle}>
                Imagine your future:
              </Text>
              <Text>
                Take some time to really think about what you’d like your life to look like. What does your ideal future entail? How much money do you ideally want to earn? Do you want to work for yourself? How many hours do you want to commit to on a daily basis?Even if these questions don’t immediately help you pick a single job, they will certainly make you realize what you don’t want your career goals to be.
              </Text>
              <Image 
                source={{uri : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iiqMNJuPXdMPAlgZlhA5GAHaFj%26pid%3DApi&f=1&ipt=3d21f47bb414ff5e68ab1de982fa72f5a4bcb6f44d3d94c6b93d23bce45e7137&ipo=images"}} 
                style={styles.image}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Footer task={task} setTask={setTask} descrition={descrition} setDescription={setDescription} date={date} setDate={setDate}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    marginTop: 30,
    zIndex: 1,
  },
  title : { 
    textTransform :"uppercase",
    fontWeight : "bold",
    fontSize : 20,
    textAlign :"center",
    marginTop : 3,
  },
  scroll : {
    padding : 20,
    display : "flex",
    gap  : 20,
    height : "100%",
    zIndex : 1
  },
  box : {
    paddingBottom :150,
  },
  scrollBox:{
  },
  scrollTitle : {
    fontWeight : "bold",
    textTransform :"uppercase",
    fontSize  : 15,
    paddingTop : 10
  },
  image : {
    width : "100%",
    height :200,
    borderRadius : 10,
  },
  footer : {
    position : "absolute",
    width : " 100%",
    bottom :  0,
    right :  0,
    zIndex :  2
  }
});

