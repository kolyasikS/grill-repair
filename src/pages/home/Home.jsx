import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styles from './styles/home.module.scss';
const Home = () => {
    return (
        <section className={styles.homeSection}>
            <img src={''} alt={''}>
            </img>
            <Header/>
        </section>
    );
};

export default Home;