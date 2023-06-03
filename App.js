import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rounting from './src/route/Rounting';
import Footer from './src/component/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Rounting/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
});
