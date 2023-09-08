import React from 'react';
import ClassicButton from "./ClassicButton";

const LightRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#fff'}
            bgColor={'#EE353F'}
            hoverShadow={'shadow-lg shadow-red-600'}
            hoverBgColor={'#aa0811'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default LightRedCb;