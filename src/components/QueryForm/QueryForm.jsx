import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BtnSearch, Form, QueryInput } from './QueryForm.styled';

function QueryForm() {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QueryInput
        value={value}
        type="text"
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
}

export default QueryForm;
