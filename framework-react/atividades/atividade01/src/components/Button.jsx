/* import React from "react"; */
import PropTypes from "prop-types";

function ButtonGroup(props) {
    let {onIncrement, onDecrement, onButtonClick } = props

    return (
        <div className="button-group">
            <button onClick={() => {onDecrement(); onButtonClick();}} className="input-group__button--small">-</button>
            <button onClick={() => {onIncrement(); onButtonClick();}} className="input-group__button--small">+</button>
        </div>
    )
}

ButtonGroup.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
}

export default ButtonGroup