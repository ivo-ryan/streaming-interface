import {styled} from 'styled-components';

export const PlayInVideo = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #1B1B1B;
            margin: 0 10px;

            
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
            


           .ep-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                background-color: #161616;
                padding: 10px 5px;

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