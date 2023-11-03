import { useContext, useState } from "react";
import InputGroup from "../components/inputGroup";
import { Link } from "react-router-dom";
import InputContext from "../context/Context";

function Calculator() {
    const context = useContext(InputContext);
    const inputValues = context.inputValues;

    const [state, setState] = useState({
        men: 0,
        woman: 0,
        kid: 0,
        meat: 0,
        garlicBread: 0,
        coal: 0,
        salt: 0,
        ice: 0,
        soda: 0,
        water: 0,
    });

    
    const handleCalculation = () => {
        setState(prevState => ({
            ...prevState,
            meat: prevState.meat + (prevState.men * 0.4) + (prevState.woman * 0.32) + (prevState.kid * 0.2),
            garlicBread: prevState.garlicBread + (prevState.men * 2) + (prevState.woman * 2) + (prevState.kid * 1),
            coal: prevState.coal + (prevState.men * 1) + (prevState.woman * 1) + (prevState.kid * 1),
            salt: prevState.salt + (prevState.men * 0.04) + (prevState.woman * 0.04) + (prevState.kid * 0.04),
            ice: prevState.ice + (prevState.men * 0.5) + (prevState.woman * 0.5) + (prevState.kid * 0.5),
            soda: prevState.soda + (prevState.men * 0.4) + (prevState.woman * 0.4) + (prevState.kid * 0.4),
            water: prevState.water + (prevState.men * 0.2) + (prevState.woman * 0.2) + (prevState.kid * 0.2),
        }));

        console.log(inputValues)
    }

    return (
            <div className="calculator">
                <h3>Precisa de uma ajudinha com o churrasco? :) 
                    <br></br>
                    Quantas pessoas vão participar?
                </h3>
                <div className="row-first">
                    <InputGroup 
                        label="Homens" 
                        id="men" 
                        defaultValue={0} 
                        /* onChange={handleInputChange}  */
                    />
                    <InputGroup 
                        label="Mulheres" 
                        id="woman" 
                        defaultValue={0} 
                        /* onChange={handleInputChange}  */
                    />
                    <InputGroup 
                        label="Crianças" 
                        id="kid" 
                        defaultValue={0} 
                        /* onChange={handleInputChange}  */
                    />
                </div>
                <div className="row">
                    <div>
                        <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
                        <p id="no-input" style={{ visibility: "hidden" }}>Por favor, selecione a quantidade de pessoas!</p>
                        <Link to="/result">
                            <button 
                            onClick={handleCalculation} 
                            className="default-button">Calcular</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Calculator