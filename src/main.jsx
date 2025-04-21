import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/counterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CounterProvider>
        <App />
    </CounterProvider>
);


