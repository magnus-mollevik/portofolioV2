import React from 'react';

const MultiLayerHoverIcon = ({src, alt, text}) => {
    return (
        <li>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                    <img src={src} alt={alt}></img>
                </span>
                <p>{text}</p>
            </div>
        </li>
    )
}
export default MultiLayerHoverIcon;