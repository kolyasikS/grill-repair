import React from 'react';
import {Container} from "@mui/material";

const ClassicContainer = ({children}) => {
    return (
        <Container maxWidth={false}
                   sx={{
                       maxWidth: {
                           lg: '1300px',
                           xs: '95%'
                       }
                   }}
        >
                {children}
        </Container>
    );
};

export default ClassicContainer;