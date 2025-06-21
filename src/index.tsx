import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "@/app/App";
import { StoreProvider } from "./app/providers";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
