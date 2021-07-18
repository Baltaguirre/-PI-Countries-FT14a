import React from 'react';
import SearchBar from '../searchbar'
import SearchBarActivity from '../activitiesCards/searchBarActivity'
import CountriesAlphabeticOrder from "../filters/countryAlphabeticOrder";
import styles from './styles.module.css'


function Nav({onSearch}) {
    return (
     <nav className={styles.navBar}>   
    <div className={styles.filters}>
    <CountriesAlphabeticOrder />
    </div>
    <div className={styles.search}>
    <SearchBar  onSearch={onSearch}/>
    <SearchBarActivity  />
    
    </div>
    
  </nav>
    );
  };
  
  export default Nav;
  