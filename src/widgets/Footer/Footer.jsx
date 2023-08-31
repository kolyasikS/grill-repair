import React from 'react';
import {Divider} from "@mui/material";
import styles from './footer.module.scss';
import {ReactComponent as Logo} from '@assets/svgs/homePage/logo.svg'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Divider/>
            <div className={'flex justify-between items-center pt-4'}>
                <div className={'flex items-center gap-6'}>
                    <div className={styles.footer__logo}>
                        <Logo/>
                    </div>
                    <div className={styles.footer__copyright}>
                        <p>Copyright © 2023 GrillCleaning.us</p>
                        <p>All Rights Reserved.</p>
                    </div>
                </div>
                <div className={styles.footer__privacy}>
                    <a href={'#'}>Privacy Policy</a>
                    <a href={'#'}>Terms and conditions</a>
                </div>
            </div>
            <p className={styles.footer__caption}>Disclaimer: Our grill cleaning technicians do not clean inside any cabinets, shelving, and/or drawers.</p>
        </footer>
    );
};

export default Footer;