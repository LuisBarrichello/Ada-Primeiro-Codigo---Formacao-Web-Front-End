    import { useState } from 'react'
    import ButtonGroup from './button'
    import PropTypes from 'prop-types'


    function InputGroup({ id, label, defaultValue }) {

        const [inputValue, setInputValue] = useState(defaultValue);

        return (
            <div className="input-group">
                <label htmlFor={id}>{label}</label>
                <input 
                    type="number" 
                    id={id} 
                    value={inputValue} 
                    className="input-valid"/>
                    <ButtonGroup inputValue={inputValue} setInputValue={setInputValue} />
            </div>
        )
    }

    InputGroup.propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        defaultValue: PropTypes.number
    }
    export default InputGroup