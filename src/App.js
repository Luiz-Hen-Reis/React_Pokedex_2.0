import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Landing,
  NotFound,
  Register,
  ProtectedRoute,
  Pokedex,
  SharedLayout,
  Favorites,
  PokemonInfo,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Pokedex />} />
          <Route path="/pokedex/:pokemon" element={<PokemonInfo />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
