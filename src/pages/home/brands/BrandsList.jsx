import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import weber from '@assets/images/homePage/weber.png';
import bull from '@assets/images/homePage/bull.png';
import lion from '@assets/images/homePage/lion.png';
import lynx from '@assets/images/homePage/lynx.png';
import blaze from '@assets/images/homePage/blaze.png';
import rcs from '@assets/images/homePage/rcs.png';
import kitchenAid from '@assets/images/homePage/kitchenAid.png';
import broilKing from '@assets/images/homePage/broil-king.png';
import wolf from '@assets/images/homePage/wolf.png';
import nexgrill from '@assets/images/homePage/nexgrill.png';
import dcs from '@assets/images/homePage/dcs.png';
import napoleon from '@assets/images/homePage/napoleon.png';
import louisiana from '@assets/images/homePage/louisiana.png';
import traeger from '@assets/images/homePage/traeger.png';
import firemagic from '@assets/images/homePage/firemagic.png';
import deltaHeat from '@assets/images/homePage/delta-heat.png';
import aog from '@assets/images/homePage/aog.png';
import viking from '@assets/images/homePage/viking.png';
import summerset from '@assets/images/homePage/summerset.png';
import charBroil from '@assets/images/homePage/char-broil.png';
import luxor from '@assets/images/homePage/luxor.png';
import Brand from "./Brand";
const BrandsList = () => {
    return (
        <Grid container columns={14}
              my={{
                  sm: 4,
                  xs: 0
              }}
              mt={{
                  xs: 4
              }}
              sx={{
                  minWidth: {
                      sm: 'fit-content',
                      xs: '100vw'
                  }
              }}
              justifyContent={'center'}
              columnSpacing={{
                      sm: 7,
                      xs: 3
              }}
              rowSpacing={{
                  sm: 2,
                  xs: 4
              }}
        >
                <Brand img={weber}/>
                <Brand img={bull}/>
                <Brand img={lion}/>
                <Brand img={lynx}/>
                <Brand img={blaze}/>
                <Brand img={rcs}/>
                <Brand img={kitchenAid}/>
                <Brand img={broilKing}/>
                <Brand img={wolf}/>
                <Brand img={nexgrill}/>
                <Brand img={dcs}/>
                <Brand img={napoleon}/>
                <Brand img={louisiana}/>
                <Brand img={traeger}/>
                <Brand img={firemagic}/>
                <Brand img={deltaHeat}/>
                <Brand img={aog}/>
                <Brand img={viking}/>
                <Brand img={summerset}/>
                <Brand img={charBroil}/>
                <Brand img={luxor}/>
        </Grid>
    );
};

export default BrandsList;