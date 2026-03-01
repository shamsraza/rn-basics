import React from "react";
import { Text, StyleSheet } from "react-native";

const DashboardScreen = () => {
  return <Text style={styles.text}> Dashboard Screens</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'blue'
  },
});

export default DashboardScreen
