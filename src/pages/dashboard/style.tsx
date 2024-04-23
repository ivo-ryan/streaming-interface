import { styled } from 'styled-components';
import poster from '../../assets/preview.jpg';


export const DashboardContainer = styled.main`
        width: 100%;
        min-height: 100vh;
        background-image: url(${poster});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 10% 50%;
        background-attachment: fixed;

        @media (max-width: 768px) {
            background-size: cover ;
            background-position: 100%;
            background-attachment: fixed;
        }
        
        @media (max-width: 425px) {
            background-image: url("	https://animefire.plus/img/lt/bg.webp");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }

        section{
            padding-top: 50px;
            height: 100%;
        }
`;