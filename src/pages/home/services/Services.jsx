import React from 'react';
import {Container, Stack} from "@mui/material";
import StartingAt from "./StartingAt";
import Grid from "@mui/material/Unstable_Grid2";
import {ourBonuses, ourCleaningServices} from "@assets/wordpress";
import Service from "./Service";
import Bonus from "./Bonus";
import {ClassicButton, LightRedCBtn} from "../../../shared/buttons/api";
import styles from './styles/services.module.scss';

const Services = () => {
    return (
        <section className={styles.section}>
            <Container maxWidth={false} sx={{maxWidth: 1320}}>
                <div className={styles.section__inner}>
                    <h1 className={styles.section__title}>Advanced Deep BBQ Grill Cleaning at <span>Affordable Prices</span></h1>
                    <StartingAt price={279}/>
                    <h2 className={styles.section__subtitle}>Our comprehensive Deep BBQ Grill Cleaning includes</h2>
                    <ul>
                        <Grid container justifyContent={'center'}
                              columnSpacing={5}
                              rowSpacing={3}
                        >
                            {ourCleaningServices.map(service => <Service key={service.id} {...service}/>)}
                        </Grid>
                    </ul>
                    <div className={styles.service__bonus}>
                        <button className={styles.service__bonusIcon}></button>
                        <h2 className={styles.service__bonusTitle}>As a bonus</h2>
                        <p className={styles.service__bonusSubtitle}>We provide additional services as part of our service package, with no added fees:</p>
                        <ul className={'overflow-hidden'}>
                            <Grid container
                                  justifyContent={'center'}
                                  columns={10}
                                  columnSpacing={5}
                            >
                                {ourBonuses.map(bonus => <Bonus key={bonus.id} {...bonus}/>)}
                            </Grid>
                        </ul>
                    </div>
                    <p className={'text-[#BC1922] text-[20px] font-[600]'}>And rest assured, every service ends with our signature post-job clean-up and wipe-down, ensuring spotless results!</p>
                    <div className={styles.service__notes}>
                        <h3 className={styles.service__notes_title}>To get an accurate quote, just reach out to us with these details</h3>
                        <div className={'flex gap-10'}>
                            <ClassicButton
                                uppercase={true}
                                fontSize={16}
                                fontWeight={800}
                                border={'2px solid #181B3F'}
                                p
                            >
                                text us: (949) 910 6556
                            </ClassicButton>
                            <LightRedCBtn
                                uppercase={true}
                                fontWeight={800}
                                discount={{type: 'black', value: 5}}
                            >
                                book online and get discount
                            </LightRedCBtn>
                        </div>
                    </div>
                    <p className={styles.service__notes_caption}>* - The price and time required for cleaning your grill depend on several factors, such as:</p>
                    <Stack direction={'row'} spacing={2}>
                        <span className={styles.service__factor}>Grill Size</span>
                        <span className={styles.service__factor}>Condition</span>
                        <span className={styles.service__factor}>Level of service requested</span>
                        <span className={styles.service__factor}>Location</span>
                    </Stack>
                </div>
            </Container>
        </section>
    );
};

export default Services;