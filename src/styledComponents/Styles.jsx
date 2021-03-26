import styled from "styled-components";

export const StyledLanding = styled.section`
  position: absolute;
  top: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */

  @media only screen and (max-width: 980px) {
  top: 14%;
  }
`;

export const GlassCard = styled.div`
  > div {
    position: relative;
    margin: 30px !important;
    width: 280px !important;
    height: 400px !important;
    padding: 0 !important;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5) !important;
    border-radius: 20px !important;
    background: rgba(255, 255, 255, 0.08);
    //backdrop-filter: blur(7px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover > img {
      top: -30px;
      transition: top 80ms linear 120ms;
    }
    :hover > article {
      transform: translateY(0px);
      opacity: 1;
    }
    > img {
      position: absolute;
      display: flex;
      text-align: center;
      justify-content: center;
      top: 30px;
      width: 25px;
      height: 25px;
      border-radius: 20px;
      margin-top: 5px;
      transition: top 80ms linear 120ms;
    }
    > article {
      padding: 20px;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;
      transition: 0.5s;

      > h2 {
        position: absolute;
        top: -80px;
        right: 30px;
        font-size: 7em;
        color: rgba(255, 255, 255, 0.05);
        pointer-events: none;
      }
      > h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
      }
      > p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
      }
      > a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        font-size: 1em;
        background-color: #fff;
        color: black;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const StyledProject = styled.section`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  .projectsIntro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >h2 {
      text-align: center;
      font-size: 4em;
      color: rgba(255, 255, 255, 0.514);
    }
    >p {
      text-align: center;
      color: white;
      max-width: 400px;
      margin: 20px;
    }
  }
  .projectsContainer {
    @media only screen and (min-width: 680px){
      width: 70vw;
    }
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
      >article{
        margin: 20px;
        color: white;
        text-align: center;
        min-width: 300px;
        max-width: 300px;
        min-height: 340px;
        background: rgba(255, 255, 255, 0.08);
        padding: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        >h3{
          margin: 5px;
          margin-bottom: 10px;
          color: #cccccc;
        }
        >p{
          height: 90px;
        }
        >img{
          position: relative;
          margin-top: 10px;
          max-height: 150px;
          border-radius: 10px;
          bottom: 0px;
        }
      }
  }


`;

export const StyledAbout = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 0px solid rgba(255, 255, 255, 0.3);
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s; /* Firefox */
  -webkit-animation: fadein 0.5s; /* Safari and Chrome */
  -o-animation: fadein 0.5s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  > .introContainer {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section > .quoteArticle {
    max-width: 400px;
    max-height: 200px;
    > h2 {
      text-align: center;
      font-size: 4em;
      color: rgba(255, 255, 255, 0.514);
    }
    > p {
      text-align: center;
      margin: 20px;
      max-width: 400px;
      color: white;
    }
  }
  > .introContainer > .imgcard {
    min-width: 300px;
    min-height: 350px;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: 1s;
    margin-top: 20px;
    margin-bottom: 50px;
    > .front {
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: 1px solid rgba(255, 255, 255, 0.13);
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      backface-visibility: hidden;
      transform: rotateX(0deg);
      transition: 1s;
      background: linear-gradient(
        rgb(201, 0, 201, 0.5),
        rgb(59, 168, 252, 0.5)
      );
      border-radius: 10px;
      > img {
        position: absolute;
        right: 0;
        width: 200px;
        filter: grayscale(100%);
        opacity: 0.8;
        bottom: 5px;
        border-radius: 20px;
      }
    }
    > .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
      border-left: 1px solid rgba(255, 255, 255, 0.13);
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      background: linear-gradient(
        rgb(59, 168, 252, 0.5),
        rgb(201, 0, 201, 0.5)
      );
      backface-visibility: hidden;
      transform: rotateX(180deg);
      transition: 1s;
      border-radius: 10px;
      > .details {
        position: absolute;
        top: 10%;
        left: 0;
        width: 100%;
        color: white;
        text-align: center;
        > h2 {
          font-size: 3em;
          color: rgba(255, 255, 255, 0.5);
        }
        > p {
          opacity: 0.6;
        }
      }
    }
    :hover > .front {
      transform: rotateX(-180deg);
    }
    :hover > .back {
      transform: rotateX(0deg);
    }
  }
  .introContainer > .quoteArticle {
    margin-bottom: 20px;
  }
  .mainAboutSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    > .TechAndLanguages {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 0 40px 0;
      > h2 {
        font-size: 3em;
        color: rgba(255, 255, 255, 0.514);
      }
      > p {
        margin-top: 40px;
        color: white;
        max-width: 400px;
      }
      > a {
        color: white;
      }
    }
    > .HobbiesAndOtherSkills {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      > h2 {
        color: rgba(255, 255, 255, 0.514);
        font-size: 3em;
      }
      > .imagesContainer {
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        ul {
          position: relative;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        justify-content: center;
          > li > div > span > img {
            background: rgb(4, 35, 59);
          }
          li {
            position: relative;
            list-style: none;
            width: 70px;
            height: 70px;
            margin: 40px 40px;
            transform: rotate(-30deg) skew(25deg);
            span {
              position: absolute;
              border-radius: 20px;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(rgb(201, 0, 201), rgb(59, 168, 252));
              transition: 0.5s;
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
            div {
              p {
                opacity: 0;
                transition: 0.3s;
                position: absolute;
                color: white;
                bottom: 0px;
                left: 0px;
              }
            }
            :hover div {
              p {
                position: absolute;
                color: white;
                bottom: -20px;
                opacity: 1;
                left: -10px;
              }
            }
            :nth-child(4) :hover {
              p {
                position: absolute;
                color: white;
                bottom: -63px;
                left: -10px;
              }
            }
            :nth-child(5) :hover {
              p {
                position: absolute;
                color: white;
                bottom: -63px;
                left: -10px;
              }
            }
            :hover span:nth-child(5) {
              transform: translate(40px, -40px);
              opacity: 1;
            }
            :hover span:nth-child(4) {
              transform: translate(30px, -30px);
              opacity: 0.8;
            }
            :hover span:nth-child(3) {
              transform: translate(20px, -20px);
              opacity: 0.6;
            }
            :hover span:nth-child(2) {
              transform: translate(10px, -10px);
              opacity: 0.4;
            }
            :hover span:nth-child(1) {
              transform: translate(0px, 0px);
              opacity: 0.2;
            }
            img {
              width: 75px;
              border-radius: 14px;
            }
          }
        }
      }
    }
  }
`;


