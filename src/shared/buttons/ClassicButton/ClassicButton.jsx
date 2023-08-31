import React from 'react';
import styles from './index.module.scss';
const ClassicButton = ({children, color, bgColor,
                           borderRadius = 55,
                           py = 16,
                           px = 24, border,
                           uppercase = true,
                           discount, fontFamily,
                           fontWeight = 800,
                           display, className,
                           fontSize = 16,
                        }) => {
    console.log(discount);
    const discountStyle = discount && (discount.type === 'black' ? {
        value: discount.value,
        bgColor: '#000',
        color: '#fff'
    } : {
        value: discount.value,
        bgColor: '#BC1922',
        color: '#fff'
    });

    return (
        <button className={`${styles.button} ${className}`} style={{
            display,
            background: bgColor,
            borderRadius,
            paddingLeft: px,
            paddingRight: px,
            paddingTop: py,
            paddingBottom: py,
            border,
        }}>
            {discountStyle &&
                <span
                    style={{
                        background: discountStyle.bgColor,
                        color: discountStyle.color
                    }}
                    className={styles.discount}
                >
                    <p>-{discountStyle.value}%</p>
                </span>
            }
            <p style={{
                color,
                fontFamily,
                fontWeight,
                fontSize,
                lineHeight: '100%',
                textTransform: uppercase ? 'uppercase' : 'none'
            }}>
                {children}
            </p>
        </button>
    );
};

export default ClassicButton;