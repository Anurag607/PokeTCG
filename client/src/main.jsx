import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import store from '../redux/store.mjs'
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Game from "./pages/Game/Game";
import MarketPlace from "./components/MarketPlace";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChainId = ChainId.Mumbai;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChainId}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/game" element={<Game />} />
            <Route path="/marketplace" element={<MarketPlace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThirdwebProvider>
  </React.StrictMode>
);
