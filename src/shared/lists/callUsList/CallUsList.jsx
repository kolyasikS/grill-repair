import React from 'react';
import styles from './callUsList.module.scss';
import telegram from "@assets/images/homePage/Telegram.png";
import messenger from "@assets/images/homePage/Messenger.png";
import whatsapp from "@assets/images/homePage/Whatsapp.png";
import {Stack} from "@mui/material";
const CallUsList = ({spacing, className}) => {
    return (
        <Stack direction={'row'} spacing={spacing} className={className}>
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
    );
};

export default CallUsList;