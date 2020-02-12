import React from 'react';

const ValidationComponent = (props) => {
    let validationMessage = "Text too short"
    if (props.textLength > 5) {
        let validationMessage = "Text long enough"
    }

    return (
        <p>{validationMessage}</p>
    );
};

export default ValidationComponent; 