import {styled} from 'styled-components';

export const Container = styled.div`
        background-color: #1B1B1B;
        margin: 40px 10px 0 10px;
        margin-top: 8%;

        @media (max-width: 768px) {
            margin-top: 15%;
        }
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

.container-video{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #232323;
    max-width: 930px ;
    height: 595px ;


    video{
        width: 100%;
    }

    @media ( max-width: 768px ){

        max-width: 690px ;
        max-height: 430px ;
    }

    @media (max-width: 425px) {
        max-height: 220px;
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