import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../assets/css/coverMusicCard.module.css'
import { faBook } from '@fortawesome/free-solid-svg-icons';

function CoverMusicCard({band,title, genre}){
    return (
        <>
            <div className={styles.containerSong}>
                <div className={styles.cover}>
                    <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>{genre}</span>
                </div>
                <div className={styles.infoSong}>
                    <span className={styles.titleSong}>{title}</span>
                    <br />
                    <span>{band}</span>
                </div>
            </div>
        </>
    )
}

export default CoverMusicCard;