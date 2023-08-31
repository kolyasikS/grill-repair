import React from 'react';
import styles from './styles/discover.module.scss';
import {ClassicContainer} from "@widgets/api";
import Grid from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import {LightRedCBtn, SliderDots, UnfilledCBtn} from "@shared/buttons/api";
import beforeCleanImg from '@assets/images/homePage/before-clean.png';
import afterCleanImg from '@assets/images/homePage/after-clean.png';
const Discover = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>Discover the Power of Our Service!</h1>
                    <p className={styles.section__subtitle}>From Dirty to Shiny - Check Out Our Before and After Gallery</p>
                    <Grid container mt={5} direction={'row'} columnSpacing={5}>
                        <Grid xl={6}>
                            <div className={'relative rounded-[32px] bg-[#0000001c] border border-[#747474] p-4'}>
                                <div className={styles.beforeCleanCaption}><span>before</span></div>
                                <img src={beforeCleanImg} alt=""/>
                            </div>
                        </Grid>
                        <Grid xl={6}>
                            <div className={'relative rounded-[32px] border border-[#747474] p-4'}>
                                <div className={styles.afterCleanCaption}><span>after</span></div>
                                <img src={afterCleanImg} alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                    <SliderDots amount={5} my={50}/>
                    <Stack direction={'row'} spacing={5}>
                        <UnfilledCBtn uppercase={true} fontWeight={800} borderWidth={2}>more cleaned grills</UnfilledCBtn>
                        <LightRedCBtn uppercase={true} fontWeight={800} discount={{type: 'black', value: 5}}>book now and get discount</LightRedCBtn>
                    </Stack>
                </div>
            </ClassicContainer>
        </section>
    );
};

export default Discover;