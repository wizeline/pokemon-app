import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "./components/pokemon/ConnectedPokemon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemons" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
