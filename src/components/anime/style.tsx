import { styled } from 'styled-components';

export const AnimesContainer = styled.div`
            position: relative;

            .img-block{
                width: 100%;
                height: 285px;
                background: #181818;

                img{
                    width: 100%;
                    height: 100%;
                    transition: .5s ease;
                }
            }

            

            .text-block{
                position: absolute;
                bottom: -1px;
                right: 0;
                left: 0;
                background-color: rgba(26,26,26,.9);
                color: #fff;
                padding: 10px 20px 10px;
                border-radius: 0.13rem;
                transition: .5s ease;

                h3{
                    padding-top: 2px;
                    font-family: sans-serif;
                    font-size: 15px;
                    text-align: center;
                }
            }

            &:hover{
                .img-block{
                    img{
                        opacity: 70%;
                    }
                }

                .text-block{
                    background: linear-gradient( rgba(0, 0, 0, .3),  #17a2b8 );
                }
                
            }

            @media (max-width: 450px) {

            .text-block{
                padding: 5px 10px 5px;
                h3{
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }

`;