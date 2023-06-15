import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import React from 'react'
import Footer from '../component/Footer'

export default function Tips() {
  return (
    <View style={style.cotainer}>
      <View style={style.caja}>
        <Text style={style.title}>Tips for setting goals at work </Text>
        <ScrollView style={style.scroll}>
            <View>
            <View>
                <YoutubePlayer
                height={200}
                play={false}
                videoId={'XpKvs-apvOs'}
                />
              </View>
              <Text style={style.scrollTitle}>
                Brainstorm
              </Text>
              <Text>
                Before you writye down the first goal that comes to mind, take time to brainstom as a tema. Asking big questions like "What would you do if you knew you couldn't fail?  will get the creative jusices flowing"
              </Text>
              <Image source={{uri : "https://www.betterup.com/hs-fs/hubfs/Blog%20Images/how%20to%20set%20goals%20and%20achieve%20them/two-people-sharing-ideas-working-on-a-laptop-how-to-set-goals-and-achieve-them.png?width=800&name=two-people-sharing-ideas-working-on-a-laptop-how-to-set-goals-and-achieve-them.png"}} 
               style={style.image}
              />
            </View>

            <View>
              <Text style={style.scrollTitle}>
                Include everyone
              </Text>
              <Text>
                It’s important that everyone is heard during the goal-setting process. Each member of your team should feel they can speak openly and contribute their ideas for goals.
                Having everyone’s input will help create goals that everyone is invested in.
                Write down each team member’s ideas, no matter how silly, so that they feel heard. Together, you can go through each goal to decide if it works for the whole team.
              </Text>
              <View>
              </View>
            </View>

            <View>
              <Text style={style.scrollTitle}>
                Ask why
              </Text>
              <Text>
                It’s important to discuss the purpose of your group goal so that everyone is on the same page. During your goal-setting session, create a relaxed atmosphere that encourages questions from everyone if there is any uncertainty. What are we doing? Where do we want to be? What does success look like?
                Every team member should have a shared vision for why you have set this common goal. It will give your team clarity on what you want to achieve and make it easier for everyone to work together.
              </Text>
            </View>
        </ScrollView>
      </View>

      <View style={style.footer}>
      <Footer/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  cotainer : {
    flex : 1,
    display : "flex",
    justifyContent : "space-between",
    paddingTop : 30
  },
  
  caja : {
    paddingBottom :  150
  },
  title: {
    fontSize : 20,
    paddingTop : 10,
    paddingBottom : 10,
    textAlign : "center",
    fontWeight : "bold",
    textTransform : "uppercase"
  },
  scroll : { 
    display : "flex",
    height : "100%",
    zIndex :2,
    padding : 20,
    gap : 50,
  },
  scrollTitle : {
    fontWeight : "bold",
    textTransform :"uppercase",
    fontSize  : 15,
    paddingTop : 10
  },
  image : {
    height :200,
    borderRadius : 10
  },
  footer : {
    position : "absolute",
    width : " 100%",
    bottom :  0,
    right :  0,
    zIndex :  2
  }
})  