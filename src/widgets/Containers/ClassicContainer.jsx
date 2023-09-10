import React from 'react';
import {Container} from "@mui/material";

const ClassicContainer = ({children, mobileScreenWidth = '95%', xl}) => {
    return (
        <Container maxWidth={false}
                   className={'max-w-2xl'}
                   sx={{
                       maxWidth: {
                           xl,
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