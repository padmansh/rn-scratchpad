import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { allActions } from "../../utils/actions";
import useSpriteStore from "../../utils/spriteStore";
import styles from "./styles";

const ActionScreen = ({ route, navigation }) => {
  const { index } = route.params;

  const { addActionToSprite, sprites } = useSpriteStore();

  const [fnList, setFnList] = React.useState(sprites?.[index]?.actions || []);

  const addToList = useCallback((fn) => {
    setFnList((list) => [...list, fn]);
  }, []);

  const addAction = useCallback(() => {
    if (fnList?.length > 0) {
      addActionToSprite(index, fnList);
      navigation.goBack();
    }
  }, [fnList]);

  const deleteSelection = useCallback((index) => {
    setFnList((list) => [
      ...list.slice(0, index),
      ...list.slice(index + 1, list.length),
    ]);
  }, []);

  const renderActionsList = useCallback(
    (fn, index) => (
      <TouchableOpacity onPress={() => addToList(fn)} key={index}>
        <View style={styles.actionList}>
          <Text>{fn?.label}</Text>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  const renderSelectedList = useCallback(
    (fn, index) => (
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.selectedList}>
          <Text>{fn?.label}</Text>
        </View>

        <TouchableOpacity onPress={() => deleteSelection(index)}>
          <View style={styles.selectDelete}>
            <Text style={{ color: "#b91c1c" }}>D</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
    []
  );

  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, gap: 16, flexDirection: "row" }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.head}>
            <Text>Actions</Text>
          </View>
          <View style={{ gap: 12, marginHorizontal: 12 }}>
            {allActions?.map(renderActionsList)}
          </View>
        </ScrollView>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.head}>
            <Text>Selected</Text>
          </View>
          <View style={{ gap: 12, marginHorizontal: 12 }}>
            {fnList?.map(renderSelectedList)}
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.save} onPress={addAction}>
        <Text style={{ color: "#fff" }}>Save</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default ActionScreen;
