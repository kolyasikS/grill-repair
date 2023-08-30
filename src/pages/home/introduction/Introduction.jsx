import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styles from './styles/home.module.scss';
import bg from '@assets/images/homePage/bg.jpeg';
import {ClassicButton} from "../../../shared/buttons/api";
import {Container} from "@mui/material";
const Introduction = () => {
    console.log(bg);
    return (
        <section className={styles.introduction}>
            <Container maxWidth={'lg'}>
                <Header/>
                <div className={styles.content__wrapper}>
                    <div className={styles.content}>
                        <h1>Clean grill -<br/>Healthy family!</h1>
                        <p>Schedule your appointment today & enjoy the benefits of a clean grill <ClassicButton
                                display={'inline-flex'}
                                bgColor={'#fff'}
                                color={'#000'}
                                px={24}
                                py={8}
                                borderRadius={47}
                            >
                                Starting at $279.00
                            </ClassicButton>
                        </p>
                        <ClassicButton
                            uppercase={true}
                            discount={{
                                value: 5,
                                bgColor: '#BC1922',
                                color: '#fff'
                            }}
                            bgColor={'#EE353F'}
                            color={'#fff'}
                            px={32}
                            py={24}
                            borderRadius={55}
                            fontWeight={800}
                            fontSize={20}
                        >
                            schedule a grill cleaning
                        </ClassicButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Introduction;