import React from 'react';
import {Container, Link, Paper, styled} from "@mui/material";
import {ClassicButton, LightRedCBtn} from "../../../shared/buttons/api";
import styles from './styles/whyImportant.module.scss';
import {importantFactors} from "@assets/wordpress";
import Factor from "./Factor";
import Grid from "@mui/material/Unstable_Grid2";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027' ,
    padding: '5px',
    textAlign: 'center',
    color: '#cacaca',
}));
const WhyImportant = () => {
    return (
        <section className={styles.section}>
            <Container maxWidth={'lg'}>
                <div className={styles.section__top}>
                    <h1 className={styles.title}>Grill Cleaning -<br/><span>Why it's so important</span></h1>
                    <ul>
                        <Grid container columnSpacing={3} rowSpacing={13}  alignItems={'center'}>
                            {importantFactors.map(factor =>
                                <Factor key={factor.id} {...factor}/>
                            )}
                        </Grid>
                    </ul>
                </div>
            </Container>
            <div className={styles.section__bottom}>
                <a href="#" className={styles.section__bottomLink}>
                    <p>Learn more about the importance of keeping your grill clean</p>
                </a>
                <LightRedCBtn
                    discount={{value: 5}}
                    px={24}
                    py={16}
                    fontWeight={800}
                    fontSize={16}
                    uppercase={true}
                >
                    schedule an appointment
                </LightRedCBtn>
            </div>
        </section>
    );
};

export default WhyImportant;