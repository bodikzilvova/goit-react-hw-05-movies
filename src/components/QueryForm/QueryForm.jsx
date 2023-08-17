
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function QueryForm() {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const [setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({query: value})
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default QueryForm;
