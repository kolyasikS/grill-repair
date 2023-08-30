import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./styles/bonus.module.scss";

const Bonus = ({title, purpose, image}) => {
    return (
        <Grid xl={2} className={'flex'}>
            <Grid spacing={0} xl={12}
                  py={'30px'}
                  container
                  className={styles.bonus}
                  direction={'column'}
                  minHeight={325}
                  justifyContent={'flex-start'}
            >
                <img src={image} alt="" className={styles.bonus__image}
                />
                <h3 className={styles.bonus__title}>{title}</h3>
                <p className={styles.bonus__purpose}>{purpose}</p>
            </Grid>
        </Grid>
    );
};

export default Bonus;