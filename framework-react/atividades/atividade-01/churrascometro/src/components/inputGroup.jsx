import React from "react";
import ButtonGroup from "./button";

function InpuGroup({id, label, defaultValue}) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input type="number" id={id} value={defaultValue} className="input-valid"/>
            <ButtonGroup />
        </div>
    )
}

export default InpuGroup