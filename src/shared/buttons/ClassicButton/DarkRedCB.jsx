import React from 'react';
import ClassicButton from "@shared/buttons/ClassicButton/ClassicButton";

const DarkRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#fff'}
            bgColor={'#BC1922'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default DarkRedCb;