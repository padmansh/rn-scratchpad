import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeNavigator from "./navigators/HomeNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <HomeNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
