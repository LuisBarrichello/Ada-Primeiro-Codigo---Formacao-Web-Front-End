    import { useState } from 'react'
    import ButtonGroup from './button'
    import PropTypes from 'prop-types'


    function InputGroup({ id, label, defaultValue }) {

        const [inputValue, setInputValue] = useState(defaultValue);

        const handleInputChange = (event) => {
            const newValue = Number(event.target.value);
            setInputValue(newValue);
            console.log(`Input com id '${id}' foi alterado para: ${newValue}`); //nao esta exibindo
        };

        return (
            <div className="input-group">
                <label htmlFor={id}>{label}</label>
                <input 
                    type="number" 
                    id={id} 
                    onChange={handleInputChange} 
                    value={inputValue} 
                    className="input-valid"/>
                    <ButtonGroup inputValue={inputValue} setInputValue={setInputValue} />
            </div>
        )
    }

    InputGroup.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        defaultValue: PropTypes.number,
        onChange: PropTypes.func,
    }
    export default InputGroup