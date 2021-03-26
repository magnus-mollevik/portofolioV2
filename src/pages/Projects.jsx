import React from 'react';
import { StyledProject} from '../styledComponents/Styles.jsx';
import { StyledBook} from '../styledComponents/StyledBook.jsx';
import ProjectCard from '../components/ProjectCard.jsx'
import PwaVsNativePng from '../images/pwaVsNative.png';
import DrinkDontDrivePng from '../images/drinkdontdrivelogo.png';
import SkatespotsPng from '../images/skatespotslogo.png';


const Projects = () => {
    return (
        <StyledProject>
            <section className="projectsIntro">
                <h2>My Projects</h2>
                <p>I have created a number of projects from UWP apps in .NET, Nativ Android apps in Android Studio and PWA apps with REACT</p>
            </section>
            <section className="projectsContainer">
                <ProjectCard title="PWA vs Native" description="Development of two identical e-learning applications for KLP, one PWA and one Native. A theoretical thesis with focus on functionality, development time and performance." imgSrc={PwaVsNativePng}></ProjectCard>
                <ProjectCard title="Drink don't drive" description="A corona friendly multiplayer card drinking game. Created with Java inn Android Studio" imgSrc={DrinkDontDrivePng}></ProjectCard>
                <ProjectCard title="Sk8tspots" description="A social media application for skaters, snowboarders and skiers. Created with C# inn .NET" imgSrc={SkatespotsPng}></ProjectCard>
                <ProjectCard title="" description="" imgSrc={""}></ProjectCard>
                <ProjectCard title="" description="" imgSrc={""}></ProjectCard>
                <StyledBook>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="book">
                                    <ul className="front">
                                        <li>
                                            <div className="frontcover">
                                                <p className="title">PWA vs Native</p>
                                                <h2 className="heading">Bachelor thesis</h2>
                                                <p className="sub-title">Comparison with focus on functionality, <br/> development time and performance</p>
                                                <div className="book-icon">
                                                    <img src={PwaVsNativePng} alt="pwa vs native illustration"></img>
                                                </div>
                                                <div className="writer">
                                                    <p>
                                                        <i>Created by </i>Magnus Møllevik
                                                    </p>
                                                </div>
                                                <p className="copyright">&copy;&nbsp; Copyright 2021</p>
                                            </div>
                                        </li>
                                        <li></li>
                                    </ul>
                                    <ul className="page">
                                        <li></li>
                                        <li>
                                            <a href="#" className="btn">Read</a>
                                        </li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <ul className="back">
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </StyledBook>
            </section>


        </StyledProject>
    )
}

export default Projects;