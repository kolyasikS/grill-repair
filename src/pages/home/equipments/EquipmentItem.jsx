import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from './styles/equipmentItem.module.scss';

const EquipmentItem = ({image, title}) => {
    return (
        <Grid xl={6}>
            <Grid container spacing={0} xl={12}
                  className={styles.item} alignItems={'center'}
                  height={180} py={0} px={2} columnSpacing={3}
            >
                <Grid xl={5}>
                    <img src={image} alt="" className={styles.item__image}
                         height={240}
                         width={240}
                    />
                </Grid>
                <Grid container xl={7} alignItems={'center'} spacing={0}>
                    <p className={styles.item__title}>{title}</p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EquipmentItem;