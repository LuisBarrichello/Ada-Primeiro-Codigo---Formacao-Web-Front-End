import { useState, useContext} from 'react'
import ButtonGroup from './button'
import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom';


function InputGroup({ id, label, defaultValue }) {

    const [data] = useOutletContext();

    const [inputValue, setInputValue] = useState(defaultValue);

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value);
        setInputValue(newValue);
        console.log(data.men)
    };

    const handleIncrement = () => {
        setInputValue(inputValue + 1)
    }
    
    const handleDecrement = () => {
        if(inputValue > 0) {
            setInputValue(inputValue - 1)
        }
    }

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input 
                type="number" 
                id={id} 
                onChange={handleInputChange} 
                value={inputValue} 
                className="input-valid"/>
                <ButtonGroup inputValue={inputValue} onDecrement={handleDecrement} onIncrement={handleIncrement} />
        </div>
    )
}

InputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default InputGroup