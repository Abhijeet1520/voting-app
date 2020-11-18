import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const FullPage = styled(Container)`
    max-width: 100vw;
    max-height: 100vh;
    height: calc(100vh - 60px);
    width: calc(100%);
    margin: auto 0;
    //margin-top: 60px;
    padding-top: 16px;
    display:flex; 
    justify-contents: center;
    align-items:center;
`;

export { FullPage };