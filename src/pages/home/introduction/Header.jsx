import React from 'react';
import {Link, Button, Stack, useMediaQuery} from "@mui/material";
import styles from './styles/header.module.scss';

import {ReactComponent as TelegramIcon} from '@assets/svgs/homePage/telegram.svg';
import {ReactComponent as ViberIcon} from '@assets/svgs/homePage/viber.svg';
import {ReactComponent as Logo} from '@assets/svgs/homePage/logo.svg'
import HeaderLink from "./HeaderLink";
import {ClassicButton, DarkRedCBtn, LightRedCBtn} from "../../../shared/buttons/api";
const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <div className={styles.nav__wrapper}>
                <nav className={styles.nav}>
                    <HeaderLink>About</HeaderLink>
                    <HeaderLink>Services</HeaderLink>
                    <HeaderLink>Gallery</HeaderLink>
                    <HeaderLink>Service areas</HeaderLink>
                    <HeaderLink>Blog</HeaderLink>
                    <HeaderLink>Contact us</HeaderLink>
                </nav>
            </div>
            <div className={styles.header__options}>
                <ClassicButton
                    bgColor={'#BC1922'}
                    color={'#fff'}
                    px={24}
                    py={16}
                    fontWeight={800}
                    uppercase={true}
                    borderRadius={55}
                >
                    Book online
                </ClassicButton>
                <div className={styles.header__optionsIcons}>
                    <TelegramIcon/>
                    <ViberIcon/>
                </div>
            </div>
            <Stack direction={'row'}
                   alignItems={'center'}
                   display={{
                       lg: 'none'
                   }}
                   spacing={{
                       xs: 2,
                       md: 3
                   }} className={styles.header__adaptive}
            >
                <DarkRedCBtn px={20}
                             fontSize={14}
                             py={12}>
                    Book grill cleaning
                </DarkRedCBtn>
                <div className={styles.header__burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Stack>
        </header>
    );
};

export default Header;