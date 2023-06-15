import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rounting from './src/route/Rounting';

export default function App() {
  return (
    <View style={styles.container}>
      <Rounting/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
});
