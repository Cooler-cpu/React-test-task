import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = (e) => {
        setDirty(true);
    }

    return {
        value,
        onChange,
        onBlur
    };
};

export default useInput;