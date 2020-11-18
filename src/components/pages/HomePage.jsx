import React from 'react';
//import firebase from 'context/firebase';

import { PageLayout, FullPage, DownArrow, FixedBgImage } from 'components/common';
import bgImage from 'images/bg.jpeg';
import smallBgImage from 'images/small-bg.jpeg';

import styled from 'styled-components'

import { CgWebsite } from "react-icons/cg";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Media from 'react-bootstrap/Media'

import Typist from 'react-typist';
import ParticlesBg from 'particles-bg';

const BackgroundImageDiv = styled(FixedBgImage)`    
    background-image: url(${bgImage});
    opacity: 0.7;
    
    @media(max-width: 768px){
        background-image: url(${smallBgImage});
        opacity: 0.9;
    }
`;

const HomePage = () => {        

    const scrollDown = (e) => {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({ block: 'end',  behavior: 'smooth' });
    };
    
    const effect_list =["color",
                        "cobweb",
                        "lines",
                        "thick",
                        "circle",
                        "polygon",
                        "square",
                        "tadpole", 
                        "fountain"]
    const random_effect = effect_list[Math.floor(Math.random() * effect_list.length)];
    return (
        <PageLayout>
            <BackgroundImageDiv opacity={1}>
                <ParticlesBg type={random_effect} bg={true} />
            </BackgroundImageDiv>
            
            <br/>
            <FullPage className="justify-content-md-center" fluid style={{"background":"transparent","color":"#fff"}}>
                <Row > 
                    <Col lg={12} md={12} sm={12} xs={12} >
                        <Typist>
                            <h1>Hello! I am Abhijeet. I am a </h1>
                            <Typist.Delay ms={500} />
                            <h2>Freelancer</h2>
                            <Typist.Backspace count={10} delay={200} />
                            <Typist.Delay ms={1000} />
                            <h2>Full Stack Web Developer</ h2>
                            <Typist.Backspace count={24} delay={200} />
                            <Typist.Delay ms={1000} />
                            <h2>Game Developer</ h2>
                            <Typist.Backspace count={14} delay={200} />
                            <Typist.Delay ms={1000} />
                            <h2>Data Scientist</ h2>
                        </Typist>    
                    </Col>{' '}
                    
                    <Col lg={12}  md={12} sm={12}  xs={12}>
                    <br/>
                    </Col>
                    
                    <Col lg={{ span: 1, offset: 6 }}  md={{ span: 1, offset: 6 }} sm={{ span: 2, offset: 6 }}  xs={{ span: 4, offset: 5 }}  className="justify-content-between">
                        <DownArrow onClick={scrollDown} href="#contact">
                            <span></span>
                            <span></span>
                            <span></span>
                        </DownArrow>
                    </Col>
                </Row>
            </FullPage>
            <FullPage className="justify-content-md-center" style={{ "background":"linear-gradient(-30deg, rgb(235 155 255) 0%, rgb(204 236 255) 100%)"}} id="contact">
                <Row noGutters="true" className="justify-content-md-center">
                    <Col lg={{ span: 9, offset: 1 }} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1}}  className="justify-content-md-center">
                        <Media>
                            <CgWebsite  
                                size="3em"
                                className="mr-2"
                                value={{ style: { verticalAlign: 'middle', horizontalAlign: 'middle' } }}
                            />
                            <Media.Body>
                                <h1>Still on development</h1>
                                <h3>
                                    For all my profiles, just google <a href="http://bit.ly/Abhijeet1520"><code>Abhijeet1520</code></a>
                                </h3>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </FullPage>
            
        </PageLayout>
    )
}

export { HomePage };