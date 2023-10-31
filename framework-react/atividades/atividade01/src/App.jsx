
import ThemeSwitch from "./components/ThemeSwitch";
import Calculator from "./components/calculator";
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