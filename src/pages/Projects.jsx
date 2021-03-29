import React from 'react';
import { StyledProject } from '../styledComponents/Styles.jsx';
import PwaVsNativePng from '../images/pwaVsNative.png';
import DrinkDontDrivePng from '../images/drinkdontdrivelogo.png';
import SkatespotsPng from '../images/skatespotslogo.png';
import BookCard from '../components/BookCard.jsx';


const Projects = () => {
    return (
        <StyledProject>
            <section className="projectsIntro">
                <h2>My Projects</h2>
                <p>I have created a number of projects from UWP apps in .NET, Nativ Android apps in Android Studio and PWA apps with REACT</p>
            </section>
            <section className="projectsContainer">
                <BookCard title="Bachelor Thesis" subTitle="A comparsion between PWA and Native" heading="PWA vs Native" description="Development of two identical e-learning applications for KLP, one PWA and one Native. A theoretical thesis with focus on functionality, development time and performance." imgSrc={PwaVsNativePng} author="Magnus Møllevik, Eivinn Eilertsen and Husein Davlajev"></BookCard>
                <BookCard title="Corona friendly drinking games" subTitle="A online multiplayer drinking game" heading="Drink don't drive" description="A corona friendly multiplayer card drinking game. Created with Java inn Android Studio" imgSrc={DrinkDontDrivePng} author="Magnus Møllevik"></BookCard>
                <BookCard title="Skatespots inn your area" subTitle="A social media app for skaters" heading="Sk8tspots" description="A social media application for skaters, snowboarders and skiers. Created with C# inn .NET" imgSrc={SkatespotsPng} author="Magnus Møllevik"></BookCard>
                <BookCard title="" description="" imgSrc={""}></BookCard>
            </section>
        </StyledProject>
    )
}

export default Projects;