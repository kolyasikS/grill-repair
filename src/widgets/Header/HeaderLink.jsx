import React from 'react';
import {Link} from "@mui/material";
import styles from "./styles/headerLink.module.scss";

const HeaderLink = ({children}) => {
    return (
        <Link className={styles.link}
              color={'#000'}
              underline={'none'}
        >
            {children}
        </Link>
    );
};

export default HeaderLink;