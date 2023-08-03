import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ActionScreen from "../screens/ActionScreen/ActionScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ActionScreen" component={ActionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
