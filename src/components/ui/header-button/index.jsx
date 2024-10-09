import React from 'react';
import './_style.scss';

const index = ({children, className}) => {
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default index;