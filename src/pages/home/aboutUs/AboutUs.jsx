import React from 'react';
import styles from './styles/aboutUs.module.scss';
import {ClassicContainer} from "@widgets/api";
import {Divider, Stack} from "@mui/material";
import twitter from '@assets/images/homePage/twitter.png';
import instagram from '@assets/images/homePage/instagram.png';
import facebook from '@assets/images/homePage/facebook.png';
import Grid from "@mui/material/Unstable_Grid2";
import telephoneImg from '@assets/images/homePage/telephone.png';
import emailImg from '@assets/images/homePage/email.png';
import {ClassicButton, UnfilledCBtn} from "@shared/buttons/api";

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <ClassicContainer >
                <Grid container
                      >
                    <Grid xl={6} xlOffset={6.3}
                          className={styles.section__inner}
                          py={12} gap={4}>
                        <h1 className={styles.section__title}>About Us</h1>
                        <div className={styles.section__description}>
                            <p>We specialize in providing top-quality cleaning services for all types of grills, from gas and charcoal to pellet and electric. With our team of experienced technicians, we guarantee to leave your grill looking and functioning like new.</p>
                            <p>We pride ourselves on our attention to detail and excellent customer service, and we are committed to exceeding your expectations. </p>
                            <p>Contact us today to schedule your grill cleaning and let us take care of the dirty work for you!</p>
                        </div>
                        <Stack direction={'row'}
                               width={'100%'}
                               justifyContent={'center'} spacing={8}>
                            <div className={styles.section__contacts}>
                                <img src={telephoneImg} alt=""/>
                                <div className={styles.section__contacts_content}>
                                    <p className={'text-[16px]'}>call or text us</p>
                                    <p className={'text-[24px]'}>(949) 910 6556</p>
                                </div>
                            </div>
                            <div className={styles.section__contacts}>
                                <img src={emailImg} alt=""/>
                                <div className={styles.section__contacts_content}>
                                    <p className={'text-[16px]'}>Email us</p>
                                    <p className={'contact email'}>info@grillcleaning.com</p>
                                </div>
                            </div>
                        </Stack>
                        <Divider color={'#fff'} flexItem/>
                        <Stack direction={'row'} spacing={4} width={'max-content'}>
                            <UnfilledCBtn
                                fontSize={14}
                                px={32}
                                py={24}
                                type={'red'}
                                borderWidth={2}
                            >
                                learn more about our company
                            </UnfilledCBtn>
                            <ClassicButton
                                fontSize={14}
                                px={32}
                                py={24}
                                bgColor={'#181B3F'}
                                color={'#fff'}
                            >
                                book your grill cleaning now
                            </ClassicButton>
                        </Stack>
                        <p className={styles.section__caption}>and enjoy a spotless grill in no time!</p>
                        <Stack direction={'row'} spacing={5} sx={{
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                            <div className={`${styles.section__socnet} ${styles.twitterBg}`}>
                                <img src={twitter} alt=""/>
                            </div>
                            <div className={`${styles.section__socnet} ${styles.instagramBg}`}>
                                <img src={instagram} alt=""/>
                            </div>
                            <div className={`${styles.section__socnet} ${styles.facebookBg}`}>
                                <img src={facebook} alt=""/>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </ClassicContainer>
        </section>
    );
};

export default AboutUs;