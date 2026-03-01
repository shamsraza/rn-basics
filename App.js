import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentsScreens from "./src/screen/ComponentsScreen";
import ListScreen from "./src/screen/ListScreen";
import HomeScreen from "./src/screen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
