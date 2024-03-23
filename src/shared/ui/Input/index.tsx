import React, { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import ErrorText from '../ErrorText';

import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  errorMessage?: string;
  register?: UseFormRegisterReturn;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  errorMessage,
  register,
  defaultValue,
  onChange,
  onFocus,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');

  const changeHandler = (text: string) => {
    setValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <div className={styles.root}>
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
      {!onChange ? (
        <input className={styles.input} type="text" placeholder={placeholder} {...register} />
      ) : (
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
          onFocus={onFocus}
        />
      )}
    </div>
  );
};

export default Input;
