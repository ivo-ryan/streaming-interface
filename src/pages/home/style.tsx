import { styled } from 'styled-components';


export const LoginContainer = styled.div`
        height: 86vh;
        width: 100% ;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0 0 0 / 40%);
        position: relative;

`;

export const Apresentação = styled.div`
        position: absolute;
        width: 50%;
        top: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        h2{
            text-align: center;
            font-size: 50px;
        }

        p{
            font-size: 1.3rem;
        }

        @media (max-width: 768px) {
            width: 80%;
        }
`;

export const ContainerValidate = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        position: absolute;
        width: 50%;
        bottom: 100px;
        gap: 16px;

        p{
            font-size: 1.2rem;
        }

        @media (max-width: 768px) {
            width: 85%;
        }
`;

export const ContainerButtom = styled.div`
        display: flex;
        width: 100%;
        gap: 15px;

        button{
            width: 30% ;
            font-size: 1.5rem;
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

        a{
            width: 30%;

            button{
                width: 100%;
                height: 100%;
            }
        }
`;

export const InputContainer = styled.div<{colorb: string}>`
        display: flex;
        width: 70%;
        flex-direction: column;
        padding: 10px 20px ;
        background-color: var(--box-animate) ;
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid ${props => props.colorb};
        font-size: 14px;

        
        label{
            text-align: left;
        }

    input{
        background-color: transparent;
        color: var(--color);
        min-height: 16px;
        min-width: 16px;
        outline: none;
        border: none;
        font-size: 16px;
        line-height: 1.5 ;
    }
    

`;