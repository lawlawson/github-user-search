import { useState } from 'react';
import styles from './Search.module.css';

const Search = (e) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Performing search for:', searchQuery);
  };

  const handleInputChange = () => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles['search-input']}>
      <input
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder='Search Github username...'
      />
      <button className={styles['search-button']} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
