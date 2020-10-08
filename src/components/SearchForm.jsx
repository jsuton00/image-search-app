import React from 'react';

export default function SearchForm(props) {
  const { changeHandler, inputValue, submitHandler } = props;

  return (
    <form
      id="search-image-form"
      name="search-image-form"
      className="search-image-form row"
    >
      <div className="search-image-section">
        <input
          id="search-image-input"
          name="search-image-input"
          type="text"
          className="search-image-input"
          placeholder="Search images..."
          value={inputValue}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="search-image-submit">
        <button
          id="btn-search-image"
          name="btn-search-image"
          type="button"
          className="search-image-button"
          onClick={submitHandler}
        >
          Search
        </button>
      </div>
    </form>
  );
}
