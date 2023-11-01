import { Link } from "react-router-dom"
import InputContext from "../context/Context"
import { useContext } from "react";

function Result() {
    const inputValues = useContext(InputContext);
    return (
        <div>
            <div className="result-total-guest">
                <p>Confira a lista para o seu churrasco!</p>
                <p id="total-guest">{inputValues.men + inputValues.woman + inputValues.kid} convidado</p>
                <span className="guest-list">{inputValues.men} homem</span>
                <span className="guest-list">{0} mulheres</span>
                <span className="guest-list">{0} crianças</span>
            </div>
            <div className="input-group-result">
                <div id="header-result">
                    <p>ITEM</p>
                    <p>QUANTIDADE</p>
                </div>
                <ul className="results">
                    <li><strong>Carne</strong><span>{0.0} kg</span></li>
                    <li><strong>Pão de Alho</strong><span>{0} unidades</span></li>
                    <li><strong>Refrigerante</strong><span>{1} garrafa de 2 L</span></li>
                    <li><strong>Água</strong><span>{0} garrafa de 1 L</span></li>
                    <li><strong>Carvão</strong><span>{0} kg</span></li>
                    <li><strong>Sal</strong><span>{0.00} kg</span></li>
                    <li><strong>Gelo</strong><span>{0.0} kg</span></li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <Link to="/">
                        <button href="index.html" className="default-button">Novo cálculo</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Result