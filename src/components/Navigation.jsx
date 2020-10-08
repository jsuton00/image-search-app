import React from 'react';
import SearchForm from './SearchForm';

export default function Navigation(props) {
  const { inputSearchTerm, inputValue, clickSearch } = props;
  return (
    <nav id="app-navigation" className="nav navbar header-navbar row">
      <div className="header-navbar-brand">
        <h1 className="header-navbar-brand-name">Imagify</h1>
      </div>
      <SearchForm
        changeHandler={inputSearchTerm}
        inputValue={inputValue}
        submitHandler={clickSearch}
      />
    </nav>
  );
}
