import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../assets/css/coverMusicCard.module.css'
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from "swiper";
import 'swiper/css';

function CoverMusicCard({band,title, genre}){
    return (
        <div className={styles.containerCards}>
            <div className={styles.gradientContainer}></div>
            <Swiper
                slidesPerView={'auto'}
                freeMode={true}
                direction={'horizontal'}
                mousewheel={{
                    forceToAxis: true,
                }}
                modules={[FreeMode,Mousewheel]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.containerSong}>
                        <div className={styles.cover}>
                            <span><FontAwesomeIcon icon={faBook} style={{marginRight: 10}}></FontAwesomeIcon>Rock</span>
                        </div>
                        <div className={styles.infoSong}>
                            <span className={styles.titleSong}>{title}</span>
                            <br />
                            <span>{band}</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CoverMusicCard;