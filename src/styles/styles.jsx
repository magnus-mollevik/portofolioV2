import styled from 'styled-components';

export const StyledAbout = styled.section`
  display: flex;
  position: absolute;
  flex-direction:column;
  left: 0;
  right: 0;
  min-height: 90vh;
  max-width: 85vw;
  margin: 0 auto;
  border-radius:  0  0 20px 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);
  .introContainer{
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap:wrap;
    min-width:100%;

  }
  section>.quoteArticle{
    max-width: 400px;
      max-height: 200px;
    >h2{
      text-align: center;
      margin-left: 10px;
      font-size: 5em;
        color: rgba(255, 255, 255, 0.514);
    }
    >p{
      text-align: center;
      margin: 20px;
      max-width: 400px;
      color: white;
    }
  }
  .introContainer>.pictureDiv{
      margin-top:20px;
      color: white;
      bottom:0;
      max-width: 300px;
      max-height: 300px;
      align-items:center;
      text-align:center;
      >img{
        position: relative;
        height: 200px;
        border-radius: 20px;
        filter: grayscale(100%);
        opacity:0.9;
        border-left: 1px solid rgba(255, 255, 255, 0.13);
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(7px);
        padding:10px;
      }
      >h1{
        position: relative;
        max-width: 300px;
        font-size: 3em;
        color: rgba(255, 255, 255, 0.514);
      }
  }
  .introContainer>.quoteArticle{
      grid-column: 1/3;
      grid-row:1/2;
      width: 100%;
      height: 100%;
  }
  .mainAboutSection{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >.TechAndLanguages{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 0 40px 0;
      >h2{
        font-size: 3em;
        color: rgba(255, 255, 255, 0.514);
      }
      >p{
        margin-top: 40px;
        color: white;
        max-width: 400px;
      }
      >a{
        color: white;
      }
    }
    >.HobbiesAndOtherSkills{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      >h2{
        color: rgba(255, 255, 255, 0.514);
        font-size: 3em;
      }
      >.imagesContainer{
        min-height:200px;
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
          position: relative;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          li{
            position: relative;
            list-style: none;
            width: 70px;
            height: 70px;
            margin: 40px 40px;
            transform: rotate(-30deg) skew(25deg);
            span{
              position: absolute;
              border-radius: 20px;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background:  #e800e8;
              transition: 0.5s;
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
            div{
              p{
                opacity:0;
                transition: 0.3s;
                position: absolute;
                color:white;
                bottom: 0px;
                left:0px;
              }

            }
            :hover div{
              p{
                position: absolute;
                color:white;
                bottom: -20px;
                opacity: 1;
                left:-10px;
               }
            }
            :nth-child(4) :hover {
              p{
                position: absolute;
                color:white;
                bottom: -63px;
                left:-10px;

              }
            }
            :nth-child(5) :hover {
              p{
                position: absolute;
                color:white;
                bottom: -63px;
                left:-10px;

              }
            }
            :hover span:nth-child(5){
              transform: translate(40px, -40px);
              opacity: 1;
              
            }
            :hover span:nth-child(4){
              transform: translate(30px, -30px);
              opacity: 0.8;
            }
            :hover span:nth-child(3){
              transform: translate(20px, -20px);
              opacity: 0.6;
            }
            :hover span:nth-child(2){
              transform: translate(10px, -10px);
              opacity: 0.4;
            }
            :hover span:nth-child(1){
              transform: translate(0px, 0px);
              opacity: 0.2;
            }
            img{
              width:75px;
              border-radius: 14px;
            }
          }
        }
      }
      .magnusGif{
        background: white;
      }
    }
  }    
`;