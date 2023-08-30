import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/factor.module.scss';
const Factor = ({title, factor, image}) => {
    return (
        <Grid xl={6}>
            <Grid container spacing={0} xl={12}
                  className={styles.factor} alignItems={'center'}
                  height={180} py={0} px={2}
            >
                <Grid xl={5}>
                    <img src={image} alt="" className={styles.factor__image}
                         height={240}
                         width={240}
                    />
                </Grid>
                <Grid container xl={7} alignItems={'center'} spacing={0}>
                    <h3 className={styles.factor__title}>{title}</h3>
                    <p className={styles.factor__content}>{factor}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Factor;