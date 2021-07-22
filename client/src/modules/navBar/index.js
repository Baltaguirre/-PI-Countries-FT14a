import React from 'react';
import SearchBar from '../searchbar'
import SearchBarActivity from '../activitiesCards/searchBarActivity'
import CountriesOrderFilters from "../filters/countriesOrderFilters";
import styles from './styles.module.css'


function Nav({ onSearch }) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.filters}>
        <CountriesOrderFilters />
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={onSearch} />
        <SearchBarActivity onSearch={onSearch} />
        </div>
      

    </nav>
  );
};

export default Nav;
