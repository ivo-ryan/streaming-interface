import {styled} from 'styled-components';

export const SNavbar = styled.header`      
        width: 100%; 
        height: 77px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #1a1a1a;
        box-shadow: 0 2px 7px 3px #1c1c1c;
        position: absolute ;
        z-index: 2;
        position: fixed;
        top: 0;

        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px ;
            height: 100%;
           

            img{
                width: 100px ;
                height: 67px;
            }

            a{
                width: 100px;
                height: 67px;
                
                img{
                    width: 100px;
                    height: 67px;
                    transition: all .5s ease-in;
                }

                &:hover{
                    img{
                        filter: drop-shadow( 0 0 5px #fff);
                        transform: scale(1.2);
                    }
                }
            }

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