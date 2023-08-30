import React from 'react';
import ClassicButton from "./ClassicButton";

const LightRedCb = (props) => {

    return (
        <ClassicButton
            {...props}
            discount={props.discount.type === 'black' ? {
                value: props.discount.value,
                bgColor: '#000',
                color: '#fff'
            } : {
                value: props.discount.value,
                bgColor: '#BC1922',
                color: '#fff'
            }}
            color={'#fff'}
            bgColor={'#EE353F'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default LightRedCb;