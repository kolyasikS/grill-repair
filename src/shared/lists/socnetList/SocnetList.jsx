import React from 'react';
import styles from './socnetList.module.scss';
import {ReactComponent as Twitter} from '@assets/svgs/homePage/TwitterUnfilled.svg';
import {ReactComponent as Instagram} from '@assets/svgs/homePage/InstagramUnfilled.svg';
import {ReactComponent as Facebook} from '@assets/svgs/homePage/FacebookUnfilled.svg';
import {Stack} from "@mui/material";

const SocnetList = ({spacing, ...props}) => {
    return (
        <Stack direction={'row'}
               {...props}
               spacing={spacing}
               sx={{
                   width: '100%',
                   justifyContent: 'center',
               }}
        >
            <div className={`${styles.socnet_item} ${styles.twitterBg}`}>
                <Twitter/>
            </div>
            <div className={`${styles.socnet_item} ${styles.instagramBg}`}>
                <Instagram/>
            </div>
            <div className={`${styles.socnet_item} ${styles.facebookBg}`}>
                <Facebook/>
            </div>
        </Stack>
    );
};

export default SocnetList;