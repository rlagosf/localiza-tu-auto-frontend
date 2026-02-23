import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
    },
  ],
  {
    // ✅ Producción en raíz (sin GitHub Pages)
    basename: "/",
  }
);
