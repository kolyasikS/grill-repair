import React from 'react';
import styles from './styles/aboutUs.module.scss';
import {ClassicContainer} from "@widgets/api";

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section__inner}>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default AboutUs;