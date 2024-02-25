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


export const FilmInfo = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #1B1B1B;
            margin: 0 10px ;
            padding-bottom: 30px;

            h2{
                padding-top: 40px;
            }

            .decription-container{
                width: 80%;

                margin-top: 30px;
            }
`;