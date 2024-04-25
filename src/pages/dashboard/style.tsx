import { styled } from 'styled-components';
import poster from '../../assets/preview.jpg';


export const DashboardContainer = styled.main`
        width: 100%;
        height: 100vh;
        background-image: url(${poster});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

        @media (max-width: 768px) {
            background-position: 100%;
        }
`;