import React from 'react';

import { PageLayout, FixedBgImage, FullPage } from 'components/common';
import contactBgImage from 'images/contactbg.jpeg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { IoIosCopy } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactPage = () => {
    
    return ( 
        <PageLayout>
            <FixedBgImage url={contactBgImage} opacity={1}/>
            <FullPage style={{background:"transparent", marginTop: '60px', height:'calc(100vh - 110px)'}} >
                <Row>
                    <Col xs={12}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>You can find us at: </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <ul>
                                    <OverlayTrigger overlay={<Tooltip>Copy to clipboard!</Tooltip>}>
                                        <CopyToClipboard text="+91 9315261153">
                                            <li><button style={{background:"transparent",border:'1px solid black', borderRadius:'6px'}}><a href="tel:+91 9315261153"><FiPhoneCall/></a> | +91 9315261153<IoIosCopy/></button></li>
                                        </CopyToClipboard>
                                    </OverlayTrigger>
                                    <br/>
                                    <OverlayTrigger overlay={<Tooltip>Copy to clipboard!</Tooltip>}>
                                        <CopyToClipboard text="freelancer.abhijeet.kumar@gmail.com">
                                            <li><button style={{background:"transparent",border:'1px solid black', borderRadius:'6px'}}><a href="mailto:freelancer.abhijeet.kumar@gmail.com"><AiOutlineMail/></a> | freelancer.abhijeet.kumar@gmail.com<IoIosCopy/></button></li>
                                        </CopyToClipboard>
                                    </OverlayTrigger>
                                </ul>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Col>
                </Row>
            </FullPage>
        </PageLayout>
    )
}

export {ContactPage};