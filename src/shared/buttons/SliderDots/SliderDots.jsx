import React, {useState} from 'react';
import SliderDot from "./SliderDot";
import {Stack} from "@mui/material";

const SliderDots = ({amount, my, type}) => {
    const [activeDot, setActiveDot] = useState(1);
    return (
        <Stack direction={'row'} zIndex={1} spacing={2} alignItems={'center'}
               my={typeof my === 'number' ? `${my}px` : my}>
            {[...new Array(amount)].map((_, ind) => <SliderDot
                type={type}
                active={activeDot === ind} num={ind}
            />)}
        </Stack>
    );
};

export default SliderDots;