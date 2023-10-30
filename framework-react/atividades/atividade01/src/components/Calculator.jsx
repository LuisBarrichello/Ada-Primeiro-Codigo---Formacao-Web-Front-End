import InputGroup from "./inputGroup";
import { Component } from "react";

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
    }

    handleCalculation = () => {
        /* this.setState((prevState) => ({
            meat: prevState.meat += (this.state.men * 0.4) + (this.state.woman * 0.32) + (this.state.kids * 0.2)
        })) */
        const meatValue = this.state.meat + (this.state.men * 0.4) + (this.state.woman * 0.32) + (this.state.kid * 0.2);
        console.log('Valor da carne:', meatValue);
        this.setState({meat: meatValue})
    }

    handleInputChange = (inputName, value) => {
        console.log(inputName, value)
        this.setState({ [inputName]: value });
    }

    render() {
        return (
            <div className="calculator">
                <h3>Precisa de uma ajudinha com o churrasco? :) 
                    <br></br>
                    Quantas pessoas vão participar?
                </h3>
                <div className="row-first">
                    <InputGroup label="Homens" id="men" defaultValue={0} onChange={(value) => this.handleInputChange("men", value)} />
                    <InputGroup label="Mulheres" id="woman" defaultValue={0} />
                    <InputGroup label="Crianças" id="kid" defaultValue={0} />
                </div>
                <div className="row">
                    <div>
                        <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
                        <p id="no-input" style={{ visibility: "hidden" }}>Por favor, selecione a quantidade de pessoas!</p>
                        <button onClick={this.handleCalculation} className="default-button">Calcular</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator