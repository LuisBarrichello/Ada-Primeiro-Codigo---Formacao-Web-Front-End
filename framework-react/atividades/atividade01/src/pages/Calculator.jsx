import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import InputGroup from "../components/inputGroup";

function Calculator() {
    
    const [data, setData] = useState({
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
        }
    )


    const handleCalculation = () => {
        setData((prevState) => ({
            meat: prevState.meat += (data.men * 0.4) + (data.woman * 0.32) + (data.kid * 0.2),
            garlicBread: prevState.garlicBread += (data.men * 2) + (data.woman * 2) + (data.kid * 1),
            coal: prevState.coal += (data.men * 1) + (data.woman * 1) + (data.kid * 1),
            salt: prevState.salt += (data.men * 0.04) + (data.woman * 0.04) + (data.kid * 0.04),
            ice: prevState.ice += (data.men * 0.5) + (data.woman * 0.5) + (data.kid * 0.5),
            soda: prevState.soda += (data.men * 0.4) + (data.woman * 0.4) + (data.kid * 0.4),
            water: prevState.water += (data.men * 0.2) + (data.woman * 0.2) + (data.kid * 0.2),
        }))
        console.log('meat:' + data.meat, 'men: ' + data.men)
    }

    const handleInputChange = (id, value) => {
        console.log(id, value)
       /*  setState({ [id]: value }); */
    }

    return (
        <div className="calculator">
            <Outlet context={[data, setData]}/>
            <h3>Precisa de uma ajudinha com o churrasco? :) 
                <br></br>
                Quantas pessoas vão participar?
            </h3>
            <div className="row-first">
                <InputGroup 
                    label="Homens" 
                    id="men" 
                    defaultValue={0} 
                    onChange={handleInputChange} 
                />
                <InputGroup 
                    label="Mulheres" 
                    id="woman" 
                    defaultValue={0} 
                    onChange={handleInputChange} 
                />
                <InputGroup 
                    label="Crianças" 
                    id="kid" 
                    defaultValue={0} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className="row">
                <div>
                    <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
                    <p id="no-input" style={{ visibility: "hidden" }}>Por favor, selecione a quantidade de pessoas!</p>
                    <Link to="/result">
                        <a 
                        onClick={handleCalculation} 
                        className="default-button">Calcular</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Calculator