/* import React from 'react'; */
import { Component } from 'react';

class ThemeSwitch extends Component {
    render() {
        return (
            <div className="theme-container">
                <label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
                <label className="switch">
                    <input type="checkbox" id="input-theme" defaultChecked={true} />
                    <span className="slider"></span>
                </label>
            </div>
        );
    }
}

export default ThemeSwitch;
