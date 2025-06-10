import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { StoreProvider } from "./app/providers";

const rootElement = document.getElementById('root');

// if (!rootElement) {
//   throw new Error("Root element not found")!
// }

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
