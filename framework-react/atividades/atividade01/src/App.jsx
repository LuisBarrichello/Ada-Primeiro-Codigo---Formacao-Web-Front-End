import { Route, Routes} from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";
import Calculator from './pages/Calculator';
import "./styles.css"; 
import Result from "./pages/Result";

function App() {
    return (
        <div className="container">
            <h1>Churrascômetro</h1>
            <Routes>
                <Route path="" element={<Calculator />} />
                <Route path="" element={<ThemeSwitch />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </div>
    );
}
export default App;