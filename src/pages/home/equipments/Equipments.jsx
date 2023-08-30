import React from 'react';
import styles from './styles/equipment.module.scss';
import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {ourEquipments} from "@assets/wordpress";
import EquipmentItem from "./EquipmentItem";
const Equipments = () => {
    return (
        <section className={styles.section}>
            <Container maxWidth={'lg'} sx={{zIndex: 1}}>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>To provide you with the best result we use:</h1>
                    <ul className={styles.section__list}>
                        <Grid container ml={3} >
                            {ourEquipments.map((equip) => <EquipmentItem {...equip}/>)}
                        </Grid>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Equipments;