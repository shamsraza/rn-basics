import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native";
//create the components
const ComponentsScreens = () => {
    const name = 'Raza'
  return (
    <View>
    <Text style={styles.textStyle}>Started with react native !</Text>
    <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

// creates the styles
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle:{
    fontSize:20
  }
});

//exports the components
export default ComponentsScreens
