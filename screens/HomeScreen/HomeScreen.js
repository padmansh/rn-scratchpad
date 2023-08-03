import React, { useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import Stripe from "../../components/Stripe";
import ScreenWrapper from "../../components/ScreenWrapper";
import useSpriteStore from "../../utils/spriteStore";
import Avatar1 from "../../assets/avatars/avatar1";
import Avatar2 from "../../assets/avatars/avatar2";
import Avatar3 from "../../assets/avatars/avatar3";
import Avatar4 from "../../assets/avatars/avatar4";
import Avatar5 from "../../assets/avatars/avatar5";
import Avatar6 from "../../assets/avatars/avatar6";
import Avatar7 from "../../assets/avatars/avatar7";
import Avatar8 from "../../assets/avatars/avatar8";

const spriteIcons = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
];

const HomeScreen = ({ navigation }) => {
  const { sprites, addSprite, removeStripe, resetStripes } = useSpriteStore();

  const [activeSprite, setActiveSprite] = React.useState({});

  const executeFnQueue = useCallback(async (item) => {
    for (let i = 0; i < item?.actions?.length; i++) {
      await item?.actions?.[i]?.action(
        item?.ref?.current?.sharedX,
        item?.ref?.current?.sharedY
      );
    }
  }, []);

  const triggerActions = useCallback(() => {
    sprites?.forEach(executeFnQueue);
  }, [sprites]);

  const handleAdd = useCallback(() => {
    if (sprites.length < spriteIcons.length) {
      addSprite(spriteIcons?.[sprites?.length]);
    }
  }, [sprites]);

  const goToActionScreen = useCallback((index) => {
    navigation.navigate("ActionScreen", { index: index });
  }, []);

  const renderSpriteCard = React.useCallback(
    ({ item, index }) => (
      <View key={index}>
        <View style={{ flex: 1 }}>
          {item?.actions?.length > 0 && (
            <View key={index} style={styles.greenDot} />
          )}

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => goToActionScreen(index)}
          >
            <View style={styles.cardTop}>
              <View style={styles.iconContainer}>
                <item.Icon width={50} height={50} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => removeStripe(index)}>
          <View style={styles.cardRemove}>
            <Text style={styles.removeText}>Remove</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const renderStripeForBoard = React.useCallback(
    (item) => (
      <Stripe
        setActiveSprite={setActiveSprite}
        Stripe={item}
        key={item.id}
        ref={item.ref}
      />
    ),
    [sprites]
  );

  React.useEffect(() => {
    if (sprites?.length < spriteIcons?.length) {
      addSprite(spriteIcons?.[sprites?.length]);
    }
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.boardContainer}>
        {sprites?.map(renderStripeForBoard)}
      </View>

      <View style={styles.stripContainer}>
        <View
          style={{
            flex: 1,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Sprit : {activeSprite?.id?.slice(0, 4) || '"-"'}</Text>
        </View>

        <View style={styles.midText}>
          <Text>X</Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Y</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
        <TouchableOpacity style={styles.execute} onPress={triggerActions}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#fff" }}>Execute</Text>
            <View
              style={[
                styles.greenDot,
                { position: "relative", marginLeft: 12 },
              ]}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.execute} onPress={resetStripes}>
          <Text style={{ color: "#fff" }}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          marginTop: 12,
        }}
      >
        <View style={{ flex: 1, marginRight: 12 }}>
          <FlatList
            horizontal
            data={sprites}
            renderItem={renderSpriteCard}
            ItemSeparatorComponent={<View style={{ width: 8 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity onPress={handleAdd} style={styles.plusContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.plusV}>
              <View style={styles.plusv} />
              <View style={styles.plusx} />
            </View>

            <Text style={{ marginTop: 8 }}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
