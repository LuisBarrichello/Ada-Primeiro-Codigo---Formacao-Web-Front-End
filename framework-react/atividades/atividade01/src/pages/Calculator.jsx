import { Component } from "react";
import InputGroup from "../components/inputGroup";

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

        /* this.handleInputChange = this.handleInputChange.bind(this) */
    }

    handleCalculation = () => {
        this.setState((prevState) => ({
            meat: prevState.meat += (this.state.men * 0.4) + (this.state.woman * 0.32) + (this.state.kid * 0.2),
            garlicBread: prevState.garlicBread += (this.state.men * 2) + (this.state.woman * 2) + (this.state.kid * 1),
            coal: prevState.coal += (this.state.men * 1) + (this.state.woman * 1) + (this.state.kid * 1),
            salt: prevState.salt += (this.state.men * 0.04) + (this.state.woman * 0.04) + (this.state.kid * 0.04),
            ice: prevState.ice += (this.state.men * 0.5) + (this.state.woman * 0.5) + (this.state.kid * 0.5),
            soda: prevState.soda += (this.state.men * 0.4) + (this.state.woman * 0.4) + (this.state.kid * 0.4),
            water: prevState.water += (this.state.men * 0.2) + (this.state.woman * 0.2) + (this.state.kid * 0.2),
        }))
        console.log('meat:' + this.state.meat, 'men: ' + this.state.men) // retorna sempre zero
    }

    handleInputChange = (id, value) => {
        console.log(id, value)
        this.setState({ [id]: value });
    }

    render() {
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
                        onChange={this.handleInputChange} 
                    />
                    <InputGroup 
                        label="Mulheres" 
                        id="woman" 
                        defaultValue={0} 
                        onChange={this.handleInputChange} 
                    />
                    <InputGroup 
                        label="Crianças" 
                        id="kid" 
                        defaultValue={0} 
                        onChange={this.handleInputChange} 
                    />
                </div>
                <div className="row">
                    <div>
                        <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
                        <p id="no-input" style={{ visibility: "hidden" }}>Por favor, selecione a quantidade de pessoas!</p>
                        <a onClick={this.handleCalculation} className="default-button">Calcular</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator