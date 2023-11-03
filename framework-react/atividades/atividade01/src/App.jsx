import { Route, Routes} from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";
import Calculator from './pages/Calculator';
import "./styles.css"; 
import Result from "./pages/Result";
import InputContext from "./context/Context";
import { useState } from "react";

function App() {
    const [inputValues, setInputValues] = useState({});

    const setInputValue = (id, value) => {
        setInputValues(prevValues => ({ ...prevValues, [id]: value }));
    };

    return (
        <div className="container">
            <h1>Churrascômetro</h1>
            <InputContext.Provider value={{ inputValues, setInputValue }}>
                <Routes>
                    <Route path="" element={<Calculator />} />
                    <Route path="" element={<ThemeSwitch />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </InputContext.Provider>
        </div>
    );
}
export default App;