import React from 'react';
import ClassicButton from "./ClassicButton";

const LightRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#fff'}
            bgColor={'#EE353F'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default LightRedCb;