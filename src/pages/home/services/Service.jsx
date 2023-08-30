import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/service.module.scss';
const Service = ({title, purpose, image}) => {
    return (
        <Grid xl={3}>
            <Grid spacing={0} xl={12}
                  className={styles.service}
                  direction={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <img src={image} alt="" className={styles.service__image}
                />
                <h3 className={styles.service__title}>{title}</h3>
                <p className={styles.service__purpose}>{purpose}</p>
            </Grid>
        </Grid>
    );
};

export default Service;