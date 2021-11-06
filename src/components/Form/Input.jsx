import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import style from './Form.module.scss';

export default function Input({ name, label, id = '', ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ...methods } = register(name);

  return (
    <div className={clsx(style.InputWrapper, !!errors[name] && 'error')}>
      <label htmlFor={id}>
        {label}
        <input {...methods} {...props} />
      </label>
      {!!errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
}
