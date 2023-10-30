/* import React from "react"; */
import PropTypes from "prop-types";

function ButtonGroup(props) {

    let {inputValue, setInputValue } = props

    const handleIncrement = () => {
        setInputValue(inputValue + 1)
    }

    const handleDecrement = () => {
        if(inputValue <= 0) {
            setInputValue(inputValue = 0)
        } else {
            setInputValue(inputValue - 1)
        }
    }

    return (
        <div className="button-group">
            <button onClick={handleDecrement} className="input-group__button--small">-</button>
            <button onClick={handleIncrement} className="input-group__button--small">+</button>
        </div>
    )
}

ButtonGroup.propTypes = {
    inputValue: PropTypes.number.isRequired,
    setInputValue: PropTypes.func.isRequired,
}

export default ButtonGroup