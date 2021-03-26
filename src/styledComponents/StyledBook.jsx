import styled from "styled-components";

export const StyledBook = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    ul{
        list-style: none
    }
    a{
        color: #2c3e50;
        text-decoration:none;
    }
    .book{
        position: relative;
        width: 240px;
        height: 340px;
        perspective: 1000px;
        transform-style: preserve-3d;
    }
    .book-icon img{
        width: 190px;
        margin-top: 10px;
        border-radius:5px;
    }
    .title{
        color: rgb(202,202,183);
        font-size:13px;
        padding-top:20px;
    }
    .heading{
        color: #ffffff;
        margin-top: 10px;
    }
    .sub-title{
        color: rgba(226, 201, 201, 0.8);
        margin-top: 10px;
        font-size: 14px;
    }
    .writer p{
        padding-top: 5px;
        text-align: left;
        float: left;
        color: rgba(255, 255, 255, 0.9);
        margin-top: 2px;
        margin-left: 5px;
    }
    .writer i{
        color: rgba(241, 232, 232, 0.8);
    }
    .copyright{
        float: left;
        padding-top: 5px;
        color: rgba(202, 194, 194, 0.6);
        font-size: small;
        margin-left: 5px;
    }
    .front li {
        background: white;
        border-radius: 10px;
    }
    .back li{
        background: linear-gradient(rgb(201, 0, 201), rgb(59, 168, 252));
        border-radius: 10px;
        width: 97.5%!important;   
    }
    .page>li{
        background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 1),
                    inset -1px 0px 1px rgba(150, 150, 150, 1);
        border-radius: 0px 5px 5px 0px;
        width: 100%;
        height: 100%;
        transform-origin: left center;
    }

    .front{
        transform: rotateY(-34deg) translateZ(8px);

    }
    .back{
        transform: rotateY(-15deg) translateZ(-8px);

    }
    .page li:nth-child(1){
        transform: rotateY(-28deg);
    }
    .page li:nth-child(2){
        transform: rotateY(-30deg);
    }
    .page li:nth-child(3){
        transform: rotateY(-32deg);
    }
    .page li:nth-child(4){
        transform: rotateY(-34deg);
    }
    .page li:nth-child(5){
        transform: rotateY(-36deg);
    }
    .front,
    .back,
    .front li,
    .back li{
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;

    }
    .front,
    .back{
        transform-origin: 0% 100%;
    }
    .front{
        transition: all 0.8s ease, z-index 0.6s;
    }
    .front li:last-child{
        transform: rotateY(180deg) translateZ(2px);
    }
    .page,
    .page > li {
        position: absolute;
    }
    .page{
        width: 100%;
        height: 98%;
        top: 1%;
        left: 3%;
    }
    .page li{
        transition-duration: 0.6s;
        background: white;
    }
    .book:hover .front{
        transform: rotateY(-145deg) translateZ(0);

    }
    .book:hover > .page li:nth-child(1){
        transform: rotateY(-30deg);
        transition: 1.5s;
    }
    .book:hover > .page li:nth-child(2){
        transform: rotateY(-35deg);
        transition: 1.8s;
    }
    .book:hover > .page li:nth-child(3){
        transform: rotateY(-118deg);
        transition: 1.6s;
    }
    .book:hover > .page li:nth-child(4){
        transform: rotateY(-130deg);
        transition: 1.4s;
    }
    .book:hover > .page li:nth-child(5){
        transform: rotateY(-140deg);
        transition: 1.2s;
    }
    .frontcover{
        height: 100%;
        width: 101%;
        position: absolute;
        background: linear-gradient(rgb(201, 0, 201), rgb(59, 168, 252));
        border-radius: 5px;
    }
    .btn{
        display: inline-block;
        text-decoration: none;
    }
`;