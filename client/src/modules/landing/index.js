import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css'



export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <h1>Bienvenidos a la Country App!</h1>
            <Link to='/home'>
                 <button className={styles.landingBtn}>Ingresar</button>
            </Link>
        </div>
    )
}