import { styled } from 'styled-components';
import poster from '../../assets/preview.jpg';

export const ContainerMenu = styled.div`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            min-height: 100%;

            background-image: url(${poster});
            background-repeat: no-repeat;
            background-size: contain;
            background-attachment: fixed;

            padding: 100px 0 20px 0;

        @media (max-width: 768px) {
            background-position: 100%;
        }
            
            
            a{
                max-width: 240px;
            }

            @media (max-width: 425px) {
               gap: 8px ; 
            a{
                width: 140px;
            }
        }

`;