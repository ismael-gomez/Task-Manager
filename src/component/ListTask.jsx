import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ListTask = (props) => {
    console.log(props)
    const {descrition, task, id} = props
    console.log(task, "from list")
    return (
        <View style={styles.container}>
            <Text>{descrition  }</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default ListTask;
