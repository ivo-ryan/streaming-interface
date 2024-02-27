import {styled} from 'styled-components';

export const Container = styled.div`
        background-color: #1B1B1B;
        margin: 40px 10px 0 10px;
`;

export const PlayInVideo = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;         

            
            h2{
                padding: 20px 0;
                font-size: 19px;
                text-align: center;
                font-weight: 500;
                width: 100%;

            }

            .container-video{
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 930px ;
                margin: 0 10px ;
                height: 595px ;
                background-color: #232323;

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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 10px;
            padding: 30px 0;

            h2{
                width: 80%;
                text-align: left;
            }

            p{  
                width: 80%;
                padding: 10px  20px;
                line-height: 25px;
                background-color: #232323;
            }
`;