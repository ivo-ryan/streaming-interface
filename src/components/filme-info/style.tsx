import { styled } from 'styled-components';

export const SectionContainer = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1A1A1A;
        width: 95%;
        gap: 50px;
        padding: 10px ;
        margin: 30px 0;
`;

export const DataContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        h2{
            width: 95%;
        }

        img{
            width: 277px;
            height: 400px;
        }

        .sinopse{
            display: flex;
            font-size: 13px;
            gap: 10px;

            p{  
                text-align: left;
                width: 90%;
                color: #ccc7c7 ;
                font-size: 13px;
            }
        }
`;

export const EpContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        background-color: #161616;
        padding: 10px 5px;

        a{
            width: 100%;
        }

        .ep-list{
            width: 100%;
        }

        .ep-list p{
            background-color: #232323;
            padding-top: 8px;
            padding-bottom: 9px;
            margin-bottom: 2px;
            padding-left: 10px;
            transition: all .5s ease;
            color: #ccc7c7;


            &:hover{
                background-color: #353535;
                color:  #17a2b8;
            }
        }
`;