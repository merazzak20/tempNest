import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./Components/Layout/HomeLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeLayout></HomeLayout>
  </StrictMode>
);
