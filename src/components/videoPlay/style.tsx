import {styled} from 'styled-components';

export const PlayInVideo = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #1B1B1B;
            margin: 30px 10px 0;

            
            h2{
                padding: 30px  0;
                font-size: 16px;
                text-align: center;
                width: 100%;

            }

            .container-video{
                display: flex;
                justify-content: center;
                width: 950px ;
                height: 595px ;


                video{
                    width: 95%;
                }

                @media ( max-width: 768px ){

                    max-width: 690px ;
                    max-height: 430px ;
                }
            }
`;

export const ListEps = styled.div`
        margin: 0 10px;
        background-color: #1B1B1B;
        padding: 20px 10px;

        .pagination{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 30px;
            

            .buttom{
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 0.5rem 0.75rem;
                margin-left: -1px;
                line-height: 1.25;
                color: #fff;
                background-color: #181818;
                border: 1px solid #323232;
                transition: all .5s ease;

                &:hover{
                    color:#17a2b8 ;
                    background-color:#232323;
                }

            }

            .list-svg{
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 0.2rem 0.5rem ;
                
                svg{
                    font-size: 25px;
                    transition: all .5s ease;

                    &:hover{
                        color: #17a2b8 ;
                    }
                }
            }
        }
            


           .ep-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                


                li{
                    width: 90%;
                    background-color: #232323;
                    padding: 8px 10px;
                    padding-bottom: 9px;
                    transition: all .5s ease;
                    color: #ccc7c7;
                    cursor: pointer;
        
                    &:hover{
                        background-color: #353535;
                        color:  #17a2b8;
                    }
                }
           } 
`;