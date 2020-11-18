import React, {useState} from 'react';
import styled from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    z-index: 100;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    top: 0;
    position: fixed;
    background: white;
    border-bottom: 3px solid #4ffd8d;
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: "Open Sans";
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    border-sizing: border-box;
    border-bottom: 3px solid #fdd54f;
    background: white;
    
    @media(min-width: 768px){
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        background: none;
        left: initial;
        top: initial;
        display: flex;
    }
`;

const LogoText=styled.span`
    color: ${p => p.color ? p.color : "white"};
    font-family: 'kaushan Script';
    font-size: 23px;
`;

const Link = ({isActive, children, ...props}) => {
    return (
    <ReactRouterDomLink {...props}>
        {children}
    </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    color: black;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'}
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    
    >div{
        height: 3px;
        background: black;
        margin: 5px 0;
        width; 100%;
    }
    @media(min-width: 768px){
        display: none;
    }
`;

export function Header(){
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <HeaderWrapper>
            <Link to="/"> 
                <LogoText color="#4C9FFF">Abhi1520</LogoText>
                <LogoText color="#3D71EB">.dev</LogoText>
            </Link>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink> 
                <StyledLink to="/contact" isActive={pathname === '/contact'}>
                    Contact
                </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}