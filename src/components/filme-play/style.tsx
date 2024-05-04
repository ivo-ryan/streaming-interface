import {styled} from 'styled-components';

export const Container = styled.div`
        background-color: #1B1B1B;
        margin: 40px 10px 0 10px;
        margin-top: 6rem ;
`;

export const PlayInVideo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #1B1B1B;
margin: 20px 10px 0;


h2{
    padding: 15px 0 ;
    font-size: 19px;
    text-align: center;
    font-weight: 500;
    width: 100%;

}

`;

export const ContainerVideo = styled.div`    
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #232323;
                max-width: 930px ;
                height: 595px ;
                position: relative;

                a{
                    color: #fff;
                }
                video{
                    width: 100%;
                }

                @media ( max-width: 768px ){

                    max-width: 690px ;
                    max-height: 430px ;
                }

                @media (max-width: 450px) {
                    max-height: 258px;
                }
                @media (max-width: 375px) {
                    max-width: 350px;
                    max-height: 205px;
                    video{
                        max-height: 200px;
                    }
                }

`;

export const DispatchPlay = styled.div`
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0 , 0, 0.7 );       
            

            svg{
                transition: all .5s ease;
                font-size: 10rem;   
            }

            p{
                font-size: 18px;
            }

            &:hover{

                    svg{color: #0079ad;}
                }

    @media (max-width: 320px) {
        svg{
            font-size: 8rem;
        }

        p{
            font-size: 1rem;
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

            @media (max-width: 450px) {
                p{
                    width: 96%;
                    padding: 10px 10px;
                    text-align: justify;
                }
            }
`;