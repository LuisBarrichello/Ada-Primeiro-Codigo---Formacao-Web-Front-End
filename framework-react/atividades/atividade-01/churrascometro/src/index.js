import React from "react";
import ThemeSwitch from "./components/themeSwitch";
import Calculator from "./components/calculator";
import { createRoot } from 'react-dom/client';
import "./styles.css"; 


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

const root = createRoot(document.getElementById('root'))
root.render(<App />)