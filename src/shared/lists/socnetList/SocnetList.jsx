import React from 'react';
import styles from './socnetList.module.scss';
import twitter from "@assets/images/homePage/twitter.png";
import instagram from "@assets/images/homePage/instagram.png";
import facebook from "@assets/images/homePage/facebook.png";
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
                <img src={twitter} alt=""/>
            </div>
            <div className={`${styles.socnet_item} ${styles.instagramBg}`}>
                <img src={instagram} alt=""/>
            </div>
            <div className={`${styles.socnet_item} ${styles.facebookBg}`}>
                <img src={facebook} alt=""/>
            </div>
        </Stack>
    );
};

export default SocnetList;