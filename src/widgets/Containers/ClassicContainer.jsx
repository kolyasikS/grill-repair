import React from 'react';
import {Container} from "@mui/material";

const ClassicContainer = ({children}) => {
    return (
        <Container maxWidth={false} sx={{maxWidth: 1320}}>
            {children}
        </Container>
    );
};

export default ClassicContainer;