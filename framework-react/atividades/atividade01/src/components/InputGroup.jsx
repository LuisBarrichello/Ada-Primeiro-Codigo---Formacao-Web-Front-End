import { useState, useContext} from 'react'
import ButtonGroup from './button'
import PropTypes from 'prop-types'
import InputContext from '../context/Context';

function InputGroup({ id, label, defaultValue }) {
    const [inputValue, setInputValue] = useState(defaultValue);
    const context = useContext(InputContext);

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value);
        setInputValue(newValue);
        context.setInputValue(id, newValue); 
    };

    const handleIncrement = () => {
        const newValue = inputValue + 1;
        setInputValue(newValue);
        context.setInputValue(id, newValue);
    }
    
    const handleDecrement = () => {
        if(inputValue > 0) {
            const newValue = inputValue - 1;
            setInputValue(newValue);
            context.setInputValue(id, newValue);
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
    /* onChange: PropTypes.func.isRequired, */
}

export default InputGroup