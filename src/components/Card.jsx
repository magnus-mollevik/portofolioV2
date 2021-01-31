import '../App.css';
import React, {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt'
import ArrowPNG from '../images/upArrow.png';
import { NavLink } from 'react-router-dom';


const Card = ({title, subTitle, content, link}) => {

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
            <article className="content">
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <p>{content}</p>
                <NavLink to={link}>Read More</NavLink>
            </article>
            <img src={ArrowPNG} alt="up arrow"/>
        </Tilt>
    )
}

export default Card;