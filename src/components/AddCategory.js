import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length > 2) {
            setCategorias(cats => [value, ...cats]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleInputChange} />
        </form>
    );

}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
};


export default AddCategory;