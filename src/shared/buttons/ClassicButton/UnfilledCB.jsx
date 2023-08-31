import React, {useMemo} from 'react';
import ClassicButton from "./ClassicButton";

const UnfilledCb = ({type = 'black',
                        borderWidth = 1,
                        ...props}) => {

    const colorSchema = useMemo(() => {
        switch (type) {
            case 'black':
                return {
                    color: '#000',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #000`
                };
            case 'white':
                return {
                    color: '#fff',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #fff`
                }
            case 'red':
                return {
                    color: '#BC1922',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #BC1922`
                }
        }
    }, [type, borderWidth])

    return (
        <ClassicButton
            {...props}
            {...colorSchema}
        >
            {props.children}
        </ClassicButton>
    );
};

export default UnfilledCb;