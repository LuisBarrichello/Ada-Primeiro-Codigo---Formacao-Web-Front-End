import React from "react";
import ThemeSwitch from "./components/themeSwitch";
import Calculator from "./components/calculator";

function App() {
    return (
        <div className="container">
            <h1>Churrascômetro</h1>
            <Calculator />
            <ThemeSwitch />
        </div>
    );
}

export default App;