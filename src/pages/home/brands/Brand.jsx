import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";

const Brand = ({img}) => {
    return (
        <Grid xl={2}>
            <img src={img} alt=""/>
        </Grid>
    );
};

export default Brand;