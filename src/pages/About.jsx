import React from 'react';
import ProfilePicture from '../images/profilPicTransparent.png';
import { StyledAbout } from '../styles/styles.jsx';
import magnusPNG from '../images/magnusPixel.gif';
import gamingPNG from '../images/gaming.png';
import PSPNG from '../images/photoshop.png';
import XDPNG from '../images/xd.png';
import skateboardPNG from '../images/skateboard.png';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <StyledAbout className="About">
            <section className="introContainer">
                <article className="quoteArticle">
                    <h2>About</h2>
                    <p>Student at Østfold University College, finishing 3 year bachelor spring 2021. Starting Master degree in computer science at NTNU fall 2021.</p>
                </article>
                <div className="pictureDiv">
                    <img className="profilePicture" src={ProfilePicture} alt="profile"></img>
                    <h1>Magnus K. Møllevik</h1>
                </div>
            </section>
            <section className="mainAboutSection">
                <article className="TechAndLanguages">
                    <h2>Technologies</h2>
                    <p>I know a series of technologies and languages, ranging from backend, frontend, cloud computing services and UI design.</p>
                    <NavLink to="/Technologies">Read More</NavLink>
                </article>
                <article className="HobbiesAndOtherSkills">
                    <h2>Hobbies and other Skills</h2>
                    <div className="imagesContainer">
                        <ul>
                            <li>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>
                                        <img src={PSPNG} alt="ps logo"></img>
                                    </span>
                                    <p>Photoshop</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>
                                        <img src={XDPNG} alt="xd logo"></img>
                                    </span>
                                    <p>AdobeXD</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>
                                        <img src={gamingPNG} alt="gaming logo"></img>
                                    </span>
                                    <p>Gaming</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>
                                        <img src={skateboardPNG} alt="skateboard logo"></img>
                                    </span>
                                    <p>Skateboard and snowboard</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>
                                        <img src={magnusPNG} className="magnusGif" alt="magnus pixelart"></img>
                                    </span>
                                    <p>Pixelart lik this character</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className=""></article>
                <article className=""></article>
            </section>
        </StyledAbout>
    )
}

export default About;