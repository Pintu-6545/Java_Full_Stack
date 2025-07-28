import { useState } from 'react';

const useFormValidate = (initialValue, validateFn) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    const onChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setError(validateFn(newValue));
    };

    const validate = () => {
        setError(validateFn(value));
    };

    return { value, error, onChange, validate };
};

export default useFormValidate;
