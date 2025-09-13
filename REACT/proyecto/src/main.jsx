import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <>
      <h1>Hola, Mundo!</h1>
      <p>¡Bienvenido a React!</p>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);