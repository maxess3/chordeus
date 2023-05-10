import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../assets/css/navbar.module.css';
import { faArrowTrendUp, faHeadphones, faHeart, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return (
        <nav>
            <div><Link to={'/'}>Chordeus</Link></div>
            <ul>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHeadphones} style={{fontSize: '17px'}}></FontAwesomeIcon>Review</Link></li>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>Recommendations</Link></li>
                <li><Link to={'/'}><FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>Popular sounds</Link></li>
                <li><Link to={'/'}><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>Send your sound</Link></li>
                <li><Link to={'/'}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>My profile</Link></li>
            </ul>
            <ul>
                <li><Link to={'/'}>Login</Link></li>
                <li><Link to={'/'}>Register</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;