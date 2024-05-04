import {styled} from 'styled-components';

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
                    height: 100%;
                }

                @media ( max-width: 768px ){

                    max-width: 690px ;
                    max-height: 430px;
                }

                @media (max-width: 450px) {
                    max-height: 268px;
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

export const ListEps = styled.div`
        margin: 0 10px;
        background-color: #1B1B1B;
        
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .container-pagination{
            max-width: 760px;

            @media (max-width: 768px) {
                max-width: 690px;
            }

            @media (max-width: 450px) {
                 width: 100%;
            }

            @media (max-width: 320px) {
                width: 200px;
            }
    }
            
 
`;


export const Pagination = styled.div`
            
            width: 100%;
            display: flex;
            justify-content: end;
            align-items: center;
            margin-bottom: 10px;
            padding: 20px 10px ;
            

            .buttom{
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 7px 5px;
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

            @media (max-width: 450px) {
                font-size: 13px;
            }

            @media (max-width: 320px) {
                justify-content: center;
            }
`;

export const ListSvg = styled.div`
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 5px 5px;
                border: 1px solid #323232;
                border: 1px 0 0 1px;
                
                svg{
                    font-size: 24px;
                    transition: all .5s ease;

                    &:hover{
                        color: #17a2b8 ;
                    }
                }

                @media (max-width: 450px) {
                svg{
                    font-size: 20px;
                }
            }

`;

export const Description = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 10px;
        padding-bottom: 30px;

        h3{
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
                h3{
                    width: 90%;
                }

                p{
                    width: 90%;
                    padding: 10px 10px;
                    text-align: justify;
                }
            }
`;


export const BlockEp = styled.div<{display: string}>`              display: ${props => props.display};
                width: 90%;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                padding-bottom: 20px;
                


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
    
                @media (max-width: 450px) {
                li{
                    width: 100%;
                }
            }
`;