import { styled } from 'styled-components';
import preview from '../../assets/preview.jpg';


export const SectionContainer = styled.section`
        max-width: 100vw;
        min-height: 100vh;
        background-image: url(${preview});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 10% 50%;
`;


export const BackContainer = styled.div`
            min-height: 100vh;
            width: 100%;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);

`;