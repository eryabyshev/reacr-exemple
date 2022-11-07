import React from 'react';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {option.map(op =>
                <option key={op.value} value={op.value}>{op.name}</option>
            )}
        </select>
    );
};

export default MySelect;