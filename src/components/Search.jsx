import React, { useState, useEffect } from 'react';
import styles from '../assets/css/search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMusic, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Search(){
    const [searchClicked, setSearchClicked] = useState(false);
    useEffect(() => {
        console.log(searchClicked)
    }, [searchClicked])
    return (
        <form action="" className={styles.container} onClick={() => setSearchClicked(prevState => !prevState)}>
            <div className={styles.innerContainer}>
                <div>
                    <FontAwesomeIcon size={'m'} className={styles.searchIcon} icon={faSearch}></FontAwesomeIcon>
                    <input className={`${searchClicked ? styles.searchbar : styles.searchbarOff}`} placeholder='Search a genre, an artist, a musician ...' type="text" />
                    <span className={styles.clear}>Clear</span>
                </div>
                <div className={`${searchClicked ? styles.results : styles.hideResults}`}>
                    <div className={styles.resultsFilter}>
                        <div>
                            <span>All results <span className={styles.numberResults}>2</span></span>
                            <span>Genres <span className={styles.numberResults}>2</span></span>
                            <span>Artists <span className={styles.numberResults}>2</span></span>
                            <span>Songs <span className={styles.numberResults}>2</span></span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faBook} className={styles.resultsIcon}></FontAwesomeIcon>
                            Jazz
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBook} className={styles.resultsIcon}></FontAwesomeIcon>
                            Rock
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUser} className={styles.resultsIcon}></FontAwesomeIcon>
                            MaXess
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMusic} className={styles.resultsIcon}></FontAwesomeIcon>
                            With Or Without You - U2
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMusic} className={styles.resultsIcon}></FontAwesomeIcon>
                            Smile - FKJ
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default Search;