import { StyleSheet, Text, View } from "react-native";
/* import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from '@react-navigation/native';  */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from "./src/screen/Dashboard";
import ComponentsScreens from "./src/screen/ComponentsScreen";

/* export default function App() {
  return (
    <View style={styles.container}>
      <DashboardScreen></DashboardScreen>
    </View>
  );
} */

/* const navigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    Components:ComponentsScreens
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  },
);

export default createAppContainer(navigator) */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={ComponentsScreens} />
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
