import React from 'react';
import Search from '../components/Search';
import CoverMusicCard from '../components/CoverMusicCard';
import styles from '../assets/css/review.module.css';

function Review(){
    return (
        <div className={styles.container}>
            <Search></Search>
            <div className={styles.releaseContainer}>
                <h2>Latest songs released</h2>
                <p>Looking for some fresh new music to add to your playlist? Look no further than the latest release from up-and-coming artist [artist name]! This talented musician has just dropped [number of songs] new tracks, and they are sure to impress.
                With [genre of music] influences and catchy hooks, these songs are perfect for anyone who loves [similar artist or genre].</p>
                <div className={styles.containerSongs}>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"Turn Up"} genre={'Rap'} band={'Lil Pump'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                </div>
            </div>
            <div className={styles.releaseContainer}>
                <h2>They need your feedback</h2>
                <p>Looking for some fresh new music to add to your playlist? Look no further than the latest release from up-and-coming artist [artist name]! This talented musician has just dropped [number of songs] new tracks, and they are sure to impress.
                With [genre of music] influences and catchy hooks, these songs are perfect for anyone who loves [similar artist or genre].</p>
                <div className={styles.containerSongs}>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                    <CoverMusicCard title={"With or Without You"} genre={'Rock'} band={'Pacifica'}></CoverMusicCard>
                </div>
            </div>
        </div>
    )
}

export default Review;