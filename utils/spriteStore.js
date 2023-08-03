import React from "react";
import { create } from "zustand";
import Avatar1 from "../assets/avatars/avatar1";
import uuid from "react-native-uuid";

const useSpriteStore = create((set) => ({
  sprites: [],

  addSprite: (icon) => {
    const ref = React.createRef();
    ref.current = {};

    set((state) => ({
      sprites: [
        ...state.sprites,
        { Icon: icon, ref: ref, actions: [], id: uuid.v4() },
      ],
    }));
  },

  removeStripe: (index) => {
    set((state) => ({
      sprites: [
        ...state.sprites.slice(0, index),
        ...state.sprites.slice(index + 1, state.sprites.length),
      ],
    }));
  },

  addActionToSprite: (index, actionArr) => {
    set((state) => ({
      sprites: [
        ...state.sprites.slice(0, index),
        { ...state.sprites?.[index], actions: actionArr },
        ...state.sprites.slice(index + 1, state.sprites.length),
      ],
    }));
  },

  resetStripes: () => {
    const ref = React.createRef();
    ref.current = {};

    set(() => ({
      sprites: [{ Icon: Avatar1, ref: ref, actions: [], id: uuid.v4() }],
    }));
  },
}));

export default useSpriteStore;
