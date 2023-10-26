import React, { Component } from "react";
import InputGroup from "./inputGroup";

class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <h3>Precisa de uma ajudinha com o churrasco? :)
                    <br></br>
                    Quantas pessoas vão participar?
                </h3>
                <div class="row-first">
                    <InputGroup label="Homens" id="men" defaultValue={0} />
                    <InputGroup label="Mulheres" id="woman" defaultValue={0} />
                    <InputGroup label="Crianças" id="kid" defaultValue={0} />
                </div>
            </div>
        )
    }
}

export default Calculator