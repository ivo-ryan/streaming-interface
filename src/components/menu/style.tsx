import { styled } from 'styled-components';

export const ContainerMenu = styled.div`
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            justify-content: center;
            gap: 20px;
            
            a{
                width: 240px;
            }

            @media (max-width: 425px) {
               gap: 8px ; 
            a{
                width: 140px;
            }
        }

`;