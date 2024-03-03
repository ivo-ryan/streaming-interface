import { styled } from 'styled-components';
import poster from '../../assets/preview.jpg';


export const DashboardContainer = styled.main`
        min-height: 100vh;
        background-image: url(${poster});
        background-repeat: no-repeat;
        background-attachment: fixed;
        

        section{
            padding-top: 50px;
            height: 100%;
        }
`;