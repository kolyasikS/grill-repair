import React, {useEffect, useState} from 'react';
import Header from "./Header";
import styles from './styles/introduction.module.scss';
import bg from '@assets/images/homePage/bg.jpeg';
import {ClassicButton} from "../../../shared/buttons/api";
import {Box, Container, useMediaQuery} from "@mui/material";
import InfoPanel from "./InfoPanel";
const Introduction = () => {
    const isMobileSize = useMediaQuery('(max-width: 600px)');

    return (
        <section className={styles.introduction}>
            <Container maxWidth={'lg'}>
                <Header/>
                <Box
                    sx={{
                        left: {
                            xl: -30,
                            lg: 0
                        },
                        paddingLeft: {
                            xl: 0,
                            sm: 20,
                            xs: 0,
                        },
                    }}
                    className={styles.content__wrapper}
                >
                    <div className={styles.content}>
                        <h1>Clean grill -<br/>Healthy family!</h1>
                        <div className={styles.content__subtitle}>
                            <p>Schedule your appointment today & enjoy the benefits of a clean grill</p>
                            <ClassicButton
                                className={styles.startingAtBtn}
                                display={'inline-flex'}
                                hoverBgColor={'#dce1e3'}
                                hoverShadow={'shadow-md shadow-white'}
                                bgColor={'#fff'}
                                color={'#000'}
                                px={24}
                                py={8}
                                uppercase={false}
                                fontWeight={600}
                                fontSize={isMobileSize ? 24 : 16}
                                borderRadius={47}
                            >
                                Starting at $279.00
                            </ClassicButton>
                        </div>
                        <ClassicButton
                            uppercase={true}
                            discount={{
                                value: 5,
                                bgColor: '#BC1922',
                                color: '#fff'
                            }}
                            bgColor={'#EE353F'}
                            hoverBgColor={'#c0181f'}
                            hoverShadow={'shadow-lg shadow-red-800'}
                            color={'#fff'}
                            px={isMobileSize ? 24: 32}
                            py={isMobileSize ? 16: 24}
                            borderRadius={55}
                            fontWeight={800}
                            fontSize={isMobileSize ? 16 : 20}
                            className={styles.scheduleBtn}
                        >
                            schedule a grill cleaning
                        </ClassicButton>
                    </div>
                </Box>
            </Container>
            <InfoPanel/>
        </section>
    );
};

export default Introduction;