import React from 'react';
import ClassicButton from "./ClassicButton";

const LightRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount && (discount.type === 'black' ? {
                value: discount.value,
                bgColor: '#000',
                color: '#fff'
            } : {
                value: discount.value,
                bgColor: '#BC1922',
                color: '#fff'
            })}
            color={'#fff'}
            bgColor={'#EE353F'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default LightRedCb;