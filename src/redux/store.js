import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import favoritesSlice from "./reducers/favoritesSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        favorites: favoritesSlice,
    }
})