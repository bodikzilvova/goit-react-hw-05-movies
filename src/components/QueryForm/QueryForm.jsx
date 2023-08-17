import React, { useState } from 'react';

function QueryForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
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
