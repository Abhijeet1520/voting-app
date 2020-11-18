import styled, {keyframes} from "styled-components";

const animate = keyframes`
    0%{
        border-color:#fff;
        transform:translate(0,0);
    }
    20%{
        border-color:#fff;
        transform:translate(15px,15px);
    }
    20.1%,100%{
        border-color:#ffd64a;
    }
`;

const DownArrow = styled.div`
    position:absolute;
    width:50px;
    height:50px;
    margin-top: 3.5vh;
    //left: calc(-50vw);

    transform:rotate(45deg);
    span{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        box-sizing:border-box;
        border:none;
        border-bottom:3px solid #fff;
        border-right:3px solid #fff;
        animation:${animate} 1s linear infinite;
        &:nth-child(1){
            top:-30px;
            left:-30px;
            animation-delay:0s;
        }
        &:nth-child(2){
            top:-15px;
            left:-15px;
            animation-delay:0.2s;
        }
        &:nth-child(3){
            top:0;
            left:0;
            animation-delay:0.4s;
        }
    }
    
    @media(max-width: 768px){
        width:30px;
        height:30px;
        margin-top: 5px;
        span{
            &:nth-child(1){
                top:-20px;
                left:-20px;
                animation-delay:0s;
            }
            &:nth-child(2){
                top:-10px;
                left:-10px;
                animation-delay:0.2s;
            }
            &:nth-child(3){
                top:0;
                left:0;
                animation-delay:0.4s;
            }       
        }
    }
`;

export {DownArrow};