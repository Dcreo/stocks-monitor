import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "@/app/App";
import { StoreProvider } from "./app/providers";
import { BrowserRouter, HashRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <HashRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </HashRouter>
);
