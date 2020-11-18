import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    color: black;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    bottom: 0;
    padding: 0 16px;    
    position: relative;
    background: white;
    border-top: 3px solid #4ffd8d;
`;


const LogoText=styled.span`
    color: ${p => p.color ? p.color : "white"};
    font-family: 'kaushan Script';
    font-size: 23px;
`;

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    color: black;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'}
`;

export function Footer(){
    return (<FooterWrapper>
        Copyright &copy; 2020
        <StyledLink to="/"> 
            <LogoText color="#4C9FFF">Abhi1520</LogoText>
            <LogoText color="#3D71EB">.dev</LogoText>
        </StyledLink>
        
    </FooterWrapper>)
};