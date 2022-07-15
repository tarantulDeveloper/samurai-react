import React from 'react';
import spinner from "../../assets/spinner.gif"
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.loader}>
            <img src={spinner} alt="loading..."/>
        </div>
    );
};

export default Preloader;
