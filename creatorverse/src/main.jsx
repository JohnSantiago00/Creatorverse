import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddCreator from "./pages/AddCreator.jsx";
import AppHeader from "./pages/AppHeader.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/new" element={<AddCreator />} />
        <Route index={false} path="/:id" element={<ViewCreator />} />
        <Route index={false} path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
