import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  ADD_FAVORITE_TO_LOCAL_STORAGE,
  GET_FAVORITES_FROM_LOCAL_STORAGE,
  REMOVE_ALL_FAVORITE_FROM_LOCAL_STORAGE,
} from "../../utils/localStorage";

const initialState = {
  favorites: GET_FAVORITES_FROM_LOCAL_STORAGE(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavoriteList: ({ favorites }, { payload }) => {
      const newFavorite = payload;
      favorites.push(newFavorite);
      ADD_FAVORITE_TO_LOCAL_STORAGE(favorites);
    },
    removeAllFromFavoriteList: ({ favorites }) => {
      favorites = [];
      REMOVE_ALL_FAVORITE_FROM_LOCAL_STORAGE();
    },
  },
});

export const { addToFavoriteList, removeAllFromFavoriteList } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
