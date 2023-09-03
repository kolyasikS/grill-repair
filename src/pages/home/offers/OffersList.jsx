import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Offer from "./Offer";

import grillCleaning from '@assets/images/homePage/grill-cleaning.png';
import grillRepair from '@assets/images/homePage/grill-repair.png';
import oldGrillRemoval from '@assets/images/homePage/old-grill-removal.png';
import grillAssembly from '@assets/images/homePage/grill-assembly.png';
import maintenance from '@assets/images/homePage/maintenance.png';

const OffersList = () => {
    return (
        <Grid container
              columns={{
                  sm: 10,
                  xs: 12
              }}
              rowSpacing={{
                  lg: 0,
                  xs: 2
              }}
              zIndex={1} columnSpacing={4}
              justifyContent={'center'}
              mt={4}
              mb={6}
        >
            <Offer img={grillCleaning} title={'Grill Cleaning'}/>
            <Offer img={grillRepair} title={'Grill Repair'} colorType={'red'}/>
            <Offer img={oldGrillRemoval} title={'Old grill removal'}/>
            <Offer img={grillAssembly} title={'Grill Assembly'}/>
            <Offer img={maintenance} title={'Maintenance'}/>
        </Grid>
    );
};

export default OffersList;