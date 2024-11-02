import React, { useState } from 'react';
export const useForm = (props) => {
  const [inputList, setInputList] = useState(props.defaultValue);

  const handleChangeInput = (type, value) => {
    setInputList((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return {
    inputList,
    handleChangeInput,
  };
};
