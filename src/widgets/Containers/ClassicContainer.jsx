import React from 'react';
import {Container} from "@mui/material";

const ClassicContainer = ({children, mobileScreenWidth = '95%'}) => {
    return (
        <Container maxWidth={false}
                   sx={{
                       maxWidth: {
                           lg: '1300px',
                           xs: mobileScreenWidth
                       }
                   }}
        >
                {children}
        </Container>
    );
};

export default ClassicContainer;