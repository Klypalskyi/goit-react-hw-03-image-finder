import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ search, onChange, onSubmit }) => (
  <form className={styles.searchForm} onSubmit={onSubmit}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      value={search}
      name="search"
      onChange={onChange}
    />
  </form>
);

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
