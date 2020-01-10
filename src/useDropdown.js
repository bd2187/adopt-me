import React, { useState } from "react";

const useDropdown = function(label, defaultState, options) {
    const [state, setState] = useState(defaultState);

    const id = `use-dropdown-${label}`;

    const Dropdown = function() {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={state}
                    onChange={evt => setState(evt.target.value)}
                    onBlur={evt => setState(evt.target.value)}
                    disabled={options.length === 0}
                >
                    <option>All</option>
                    {options.map(function(option) {
                        return (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    };

    return [state, Dropdown, setState];
};

export default useDropdown;
