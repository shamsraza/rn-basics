import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends 1" },
    { name: "Friends 2" },
    { name: "Friends 3" },
    { name: "Friends 4" },
    { name: "Friends 5" },
    { name: "Friends 6" },
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
        return <Text style={styles.textStyle}>{item.name}</Text>;
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
