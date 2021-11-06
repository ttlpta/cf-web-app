import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form({ defaultValues, children, onSubmit, schema, loading }) {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      {loading && <div>Loading....</div>}
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
