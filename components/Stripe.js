import React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  Extrapolation,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import { getScaledDimension } from "../utils/helpers";

const ICON_SIZE = 50;
const X_GAP = 20 + ICON_SIZE / 2; // x margin
const Y_GAP = 20;
const WIDTH = Dimensions.get("window").width - 40;
const HEIGHT =
  Dimensions.get("window").height - 40 - getScaledDimension(190, "height");

const extrapolation = {
  extrapolateLeft: Extrapolation.CLAMP,
  extrapolateRight: Extrapolation.CLAMP,
};

const Stripe = React.forwardRef(
  ({ Stripe, setActiveSprite, setActiveX, setActiveY }, ref) => {
    const insets = useSafeAreaInsets();
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const moving = useSharedValue(false);

    ref.current.sharedX = translateX;
    ref.current.sharedY = translateY;

    const gestureHandler = useAnimatedGestureHandler({
      onStart: () => {
        moving.value = true;
        runOnJS(setActiveSprite)(Stripe);
      },
      onActive: (event) => {
        if (moving.value) {
          translateX.value = event.absoluteX - X_GAP;
          translateY.value = event.absoluteY - Y_GAP - insets.top;
        }
      },
      onEnd: () => {
        moving.value = false;
      },
    });

    const animatedPosition = useAnimatedStyle(() => {
      return {
        position: "absolute",
        transform: [
          {
            translateX: interpolate(
              translateX.value,
              [0, WIDTH - ICON_SIZE - 3],
              [0, WIDTH - ICON_SIZE - 3],
              extrapolation
            ),
          },
          {
            translateY: interpolate(
              translateY.value,
              [0, HEIGHT - insets.top - insets.bottom],
              [0, HEIGHT - insets.top - insets.bottom],
              extrapolation
            ),
          },
        ],
      };
    });

    return (
      <PanGestureHandler id={uuid.v4()} onGestureEvent={gestureHandler}>
        <Animated.View style={animatedPosition}>
          <Stripe.Icon height={50} width={50} />
        </Animated.View>
      </PanGestureHandler>
    );
  }
);

export default Stripe;
