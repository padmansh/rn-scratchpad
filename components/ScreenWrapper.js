import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

const ScreenWrapper = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { marginTop: insets.top, marginBottom: insets.bottom },
      ]}
    >
      <StatusBar style="auto" />
      {children}
    </View>
  );
};

export default ScreenWrapper;
