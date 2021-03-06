import React from 'react';

const Input = ({ type, label, id, onChange }) => (

    <div>
        {label && (
            <label>
                {label}
                <input
                    type={type}
                    id={id}
                    onChange={(e) => onChange && onChange(e.target.value)}
                />
            </label>
        )}
    </div>
)

export default Input
