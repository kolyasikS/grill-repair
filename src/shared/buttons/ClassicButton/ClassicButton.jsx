import React from 'react';
import styles from './index.module.scss';
const ClassicButton = ({children, color, bgColor,
                           borderRadius = 55,
                           py = 16,
                           px = 24, border,
                           uppercase,
                           discount, fontFamily,
                           fontWeight = 800,
                           display,
                           fontSize = 16
                        }) => {
    console.log(discount);
    return (
        <button className={styles.button} style={{
            display,
            background: bgColor,
            borderRadius,
            paddingLeft: px,
            paddingRight: px,
            paddingTop: py,
            paddingBottom: py,
            border,
        }}>
            {discount &&
                <span
                    style={{
                        background: discount.bgColor,
                        color: discount.color
                    }}
                    className={styles.discount}
                >
                    <p>-{discount.value}%</p>
                </span>
            }
            <p style={{
                color,
                fontFamily,
                fontWeight,
                fontSize,
                textTransform: uppercase ? 'uppercase' : 'none'
            }}>
                {children}
            </p>
        </button>
    );
};

export default ClassicButton;