import React from 'react';
import ClassicButton from "./ClassicButton";

const UnfilledCb = ({type = 'black',
                        borderWidth = 1,
                        ...props}) => {
    const colorSchema = type === 'black' ? {
        color: '#000',
        bgColor: 'transparent',
        border: `${borderWidth}px solid #000`
    } : {
        color: '#fff',
        bgColor: 'transparent',
        border: `${borderWidth}px solid #fff`
    };
    const discount = props.discount && (props.discount.type === 'black' ? {
        value: props.discount.value,
        bgColor: '#000',
        color: '#fff'
    } : {
        value: props.discount.value,
        bgColor: '#BC1922',
        color: '#fff'
    })
    return (
        <ClassicButton
            {...props}
            discount={discount}
            {...colorSchema}
        >
            {props.children}
        </ClassicButton>
    );
};

export default UnfilledCb;