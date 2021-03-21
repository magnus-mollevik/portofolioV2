import React from 'react';
import {StyledProject} from '../styledComponents/Styles.jsx';
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
            </section>

        </StyledProject>
    )
}

export default Projects;