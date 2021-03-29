import React from 'react';
import ProfilePicture from '../images/profilPicTransparent.png';
import { StyledAbout } from '../styledComponents/Styles.jsx';
import magnusPNG from '../images/magnusPixel.gif';
import gamingPNG from '../images/gaming.png';
import PSPNG from '../images/photoshop.png';
import XDPNG from '../images/xd.png';
import skateboardPNG from '../images/skateboard.png';
import MultiLayerHoverIcon from '../components/MultiLayerHoverIcon.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const About = () => {

	return (
		<StyledAbout className="About">
			<section className="introContainer">
				<article className="quoteArticle">
					<h2>About</h2>
					<p>Student at Østfold University College, finishing 3 year bachelor spring 2021. Starting Master degree in informatics at NTNU fall 2021.</p>
				</article>
				<div className="imgcard">
					<div className="front"><img src={ProfilePicture} alt="profile" /></div>
					<div className="back">
						<div className="details">
							<h2>Magnus K. Møllevik</h2><br /><p>Software Engineer</p>
							<div className="social icons">
								<FontAwesomeIcon icon={faCoffee} />
							</div>
						</div>
					</div>
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
							<MultiLayerHoverIcon src={PSPNG} alt="ps logo" text="Photoshop"></MultiLayerHoverIcon>
							<MultiLayerHoverIcon src={XDPNG} alt="xd logo" text="Adobe XD"></MultiLayerHoverIcon>
							<MultiLayerHoverIcon src={gamingPNG} alt="gaming logo" text="Gaming"></MultiLayerHoverIcon>
							<MultiLayerHoverIcon src={skateboardPNG} alt="skateboard logo" text="Skateboard and Snowbaord"></MultiLayerHoverIcon>
							<MultiLayerHoverIcon src={magnusPNG} className="magnusGif" alt="magnus pixelart" text="Pixel art like this character"></MultiLayerHoverIcon>
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