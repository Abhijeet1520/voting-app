import styled from 'styled-components';
import { FullPage } from 'components/common';

const FixedBgImage = styled(FullPage)`
    background-size:cover;
    position: fixed;
    z-index: -2;
    
    background-image: url(${p => p.url});
    opacity: ${p => p.opacity};
`;

export { FixedBgImage };