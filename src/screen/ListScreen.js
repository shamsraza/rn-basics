import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends 1" ,age:"20"},
    { name: "Friends 2" ,age:"30"},
    { name: "Friends 3" ,age:"35"},
    { name: "Friends 4" ,age:"33"},
    { name: "Friends 5" ,age:"23"},
    { name: "Friends 6" ,age:"15"},
  ];
  return (
    <FlatList
      data={friends}
      /* renderItem={(item) => { // we can use direct property of item object
    //element === {item:{name:"Friends #1"},index:0}
    return <Text>{item.name}</Text>;
    

  }} */

      
      keyExtractor={(friends) => friends.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}-Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
