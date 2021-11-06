import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import style from './Form.module.scss';

export default function Select({ name, label, id = '', options = [], ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ...methods } = register(name);

  return (
    <div className={clsx(style.InputWrapper, !!errors[name] && 'error')}>
      <label htmlFor={id}>
        {label}
        <select {...methods} {...props}>
          {options.map((o, key) => (
            <options value={o.value} key={`${o.value}${key}`}>
              {o.label}
            </options>
          ))}
        </select>
      </label>
      {!!errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
}
