import React from 'react';
import { StyledBook} from '../styledComponents/StyledBook.jsx';

const BookCard = ({heading, title, subTitle, description, imgSrc, author}) => {
    return(
        <StyledBook>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="book">
                                    <ul className="front">
                                        <li>
                                            <div className="frontcover">
                                                <p className="title">{title}</p>
                                                <h2 className="heading">{heading}</h2>
                                                <p className="sub-title">{subTitle}</p>
                                                <div className="book-icon">
                                                    <img src={imgSrc} alt="title illustration"></img>
                                                </div>
                                                <div className="writer">
                                                    <p>
                                                        <i>Created by </i>{author}
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
                                            <p className="insideHeading">{heading}</p>
                                            <p className="description">{description}</p>
                                            <a href="/home" className="btn">Read More</a>
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
    )
}

export default BookCard;