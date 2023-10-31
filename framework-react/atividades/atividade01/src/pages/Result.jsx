

function Result() {
    return (
        <div>
            <div className="result-total-guest">
                <p>Confira a lista para o seu churrasco!</p>
                <p id="total-guest">0 convidado</p>
                <span className="guest-list">{0} homem</span>
                <span className="guest-list">{0} mulheres</span>
                <span className="guest-list">{0} crianças</span>
            </div>
            <div className="input-group-result">
                <div id="header-result">
                    <p>ITEM</p>
                    <p>QUANTIDADE</p>
                </div>
                <ul className="results">
                    <li><strong>Carne</strong><span>0.0 kg</span></li>
                    <li><strong>Pão de Alho</strong><span>0 unidades</span></li>
                    <li><strong>Refrigerante</strong><span>1 garrafa de 2 L</span></li>
                    <li><strong>Água</strong><span>0 garrafa de 1 L</span></li>
                    <li><strong>Carvão</strong><span>0 kg</span></li>
                    <li><strong>Sal</strong><span>0.00 kg</span></li>
                    <li><strong>Gelo</strong><span>0.0 kg</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Result