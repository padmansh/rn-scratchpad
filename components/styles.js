import { StyleSheet } from "react-native";
import { getScaledDimension } from "../utils/helpers";

const SPACE = getScaledDimension(20, "width");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE,
    backgroundColor: "#F1F1F0",
  },
});

export default styles;
