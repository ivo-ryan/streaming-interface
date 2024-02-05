import {styled} from 'styled-components';

export const SNavbar = styled.header`      
        width: 100%; 
        height: 14vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgb(0 0 0 / 40%);

        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 40px ;

            button{
                font-size: 1rem;
                padding: 10px 15px;
                background-color:rgb(229, 9, 20) ;
                color: var(--color) ;
                border: none;
                border-radius: 4px;
                font-weight: bold ;
                transition: all .5s ease-in;
                cursor: pointer;

                &:hover{
                    background-color: var(--color-principal) ;
                }
            }
        }
`;