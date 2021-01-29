import '../App.css';
import React, {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt'

const Card = ({title, subTitle, content}) => {

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);
      
        useEffect(() => {
          VanillaTilt.init(tilt.current, options);
        }, [options]);
      
        return <div ref={tilt} {...rest} />;
      }
    const options = {
        scale: 1,
        speed: 300,
        max: 15,
        glare: true,
        "max-glare": 0.3
      };

    return (
        <Tilt options={options} className="card" >
            <div className="content">
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <p>{content}</p>
                <a href="#">Read More</a>
            </div>
        </Tilt>
    )
}

export default Card;