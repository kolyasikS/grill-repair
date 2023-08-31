import React from 'react';
import styles from "./styles/infoPanel.module.scss";
import clock from '@assets/images/homePage/clock.png';
import telephone from '@assets/images/homePage/telephone.png';
import email from '@assets/images/homePage/email.png';

import telegram from '@assets/images/homePage/Telegram.png';
import messenger from '@assets/images/homePage/Messenger.png';
import whatsapp from '@assets/images/homePage/Whatsapp.png';
import {Divider, Stack} from "@mui/material";
import {UnfilledCBtn} from "@shared/buttons/api";
const InfoPanel = () => {
    return (
        <Stack direction={'row'}
               divider={<Divider orientation={'vertical'}
                                 color={'#fff'} flexItem/>} className={styles.infoPanel}>
            <div className={styles.infoPanelItem}>
                <div>
                    <img src={clock} alt=""/>
                </div>
                <div>
                    <h3>working hours</h3>
                    <p>Mon-Sat:</p>
                    <p>7:00 am - 7:00 pm</p>
                    <p className={'mt-2'}>Online booking: 24/7</p>
                </div>
            </div>
            <div className={styles.infoPanelItem}>
                <div>
                    <img src={telephone} alt=""/>
                </div>
                <div>
                    <h3>call or text us</h3>
                    <p className={'mb-4'}>(949) 910 6556</p>
                    <Stack direction={'row'} spacing={2}>
                        <a href="#">
                            <img src={telegram} alt=""/>
                        </a>
                        <a href="#">
                            <img src={messenger} alt=""/>
                        </a>
                        <a href="#">
                            <img src={whatsapp} alt=""/>
                        </a>
                    </Stack>
                </div>
            </div>
            <div className={styles.infoPanelItem}>
                <div>
                    <img src={email} alt=""/>
                </div>
                <div>
                    <h3>email us</h3>
                    <p className={'mb-4'}>info@grillcleaning.com</p>
                    <UnfilledCBtn
                        py={14}
                        px={18}
                        type={'black'}
                        borderWidth={2}
                    >
                        contact us
                    </UnfilledCBtn>
                </div>
            </div>
        </Stack>
    );
};

export default InfoPanel;