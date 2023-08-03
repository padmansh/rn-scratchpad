import { withTiming } from "react-native-reanimated";

const moveX50 = {
  label: "Move X by 50",
  action: (sharedX, sharedY) =>
    new Promise((res, rej) => {
      sharedX.value = withTiming(sharedX.value + 50, { duration: 500 });
      setTimeout(res, 500);
    }),
};

const moveY50 = {
  label: "Move Y by 50",
  action: (sharedX, sharedY) =>
    new Promise((res, rej) => {
      sharedY.value = withTiming(sharedY.value + 50, { duration: 500 });
      setTimeout(res, 500);
    }),
};

const gotoOO = {
  label: "Goto (0, 0)",
  action: (sharedX, sharedY) =>
    new Promise((res, rej) => {
      sharedX.value = withTiming(0, { duration: 500 });
      sharedY.value = withTiming(0, { duration: 500 });
      setTimeout(res, 500);
    }),
};

const moveX50Y50 = {
  label: "Move X, Y by 50",
  action: (sharedX, sharedY) =>
    new Promise((res, rej) => {
      sharedX.value = withTiming(sharedX.value + 50, { duration: 500 });
      sharedY.value = withTiming(sharedY.value + 50, { duration: 500 });
      setTimeout(res, 500);
    }),
};

const allActions = [moveX50, moveY50, gotoOO, moveX50Y50];

export { moveX50, moveY50, gotoOO, moveX50Y50, allActions };
