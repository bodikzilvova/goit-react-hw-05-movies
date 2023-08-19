import React, { useState } from 'react';
import { BtnSearch, Form, QueryInput } from './QueryForm.styled';

function QueryForm({ setSearchParams }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return alert('Введіть назву фільму для пошуку');
    }
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
