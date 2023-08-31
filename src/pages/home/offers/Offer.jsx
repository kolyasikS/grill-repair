import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/offer.module.scss';

const Offer = ({img, title, colorType = 'white'}) => {
    return (
        <Grid
            xl={2}
        >
            <Grid
                gap={3}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                className={`${styles.offer} ${colorType === 'white' ? styles.whiteBg : styles.redBg}`}
            >
                <img src={img} alt=""/>
                <h4>{title}</h4>
            </Grid>
        </Grid>
    );
};

export default Offer;