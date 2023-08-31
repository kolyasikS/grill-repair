import React from 'react';
import styles from './styles/promise.module.scss';
import Grid from "@mui/material/Unstable_Grid2";

const PromiseItem = ({promise, num, allItems}) => {
    const borderFilled = num <= (allItems / 2)
        ? `linear-gradient(${-90 + num * 30}deg, #757474FF 50%, transparent 50%),
                      linear-gradient(${270}deg, #EE353F 50%, #757474FF 50%)`
        : `linear-gradient(${90 + 30 * num}deg, #EE353F 50%, transparent 50%),
                      linear-gradient(${90}deg, #757474FF 50%, #EE353F 50%)`
    return (
        <Grid xl={4}>
            <Grid container spacing={0} className={styles.promise}>
                <Grid xl={4}>
                    <div className={`${styles.promise__num}`} style={{backgroundImage: borderFilled}}>
                        <div className={styles.overlay}><span>{num}</span></div>
                    </div>
                </Grid>
                <Grid xl={8}>
                    <p className={styles.promise__content}>{promise}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PromiseItem;