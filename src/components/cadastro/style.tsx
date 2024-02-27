import styled from "styled-components";


export const FormContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;       
        border-radius: 10px;
        margin-top: 30px;
        
        .container{

        .form-container{
            width: 100%;
            
            form{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                
                
                .input{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px 20px ;
                    background-color: transparent;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    font-size: 14px;
   
                    
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
                    
                }
                
            }
                .submit{
                    width: 100%;
                    margin-top: 10px ;
                    button{
                        width: 100%;
                        font-size: 1rem;
                        background-color:rgb(229, 9, 20) ;
                        color: var(--color);
                        padding: 11px 6px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all .5s ease ;

                        &:hover{
                            background-color: var(--color-principal) ;
                        }

                    }
                }
            }
        }
        
`;

export const Container = styled.div`
        
            display: flex;
            align-items: center;
            gap: 20px;
            flex-direction: column;
            background-color: var(--bg-color-login);
            min-height: 500px ;
            width: 450px;
            padding: 48px 68px ;
            backdrop-filter: blur(14px);

            header{
                display: flex;
                width: 100%;
                justify-content: flex-start;
                font-size: 20px;
            }
`;

export const FormC = styled.div`
            width: 100%;
            
            form{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;}
`;

export const InputContainer = styled.div`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px 20px ;
                    background-color: transparent;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.7);
                    font-size: 14px;
   
                    
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

export const Submit = styled.div`
                
                    width: 100%;
                    margin-top: 10px ;
                    button{
                        width: 100%;
                        font-size: 1rem;
                        background-color:rgb(229, 9, 20) ;
                        color: var(--color);
                        padding: 11px 6px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all .5s ease ;

                        &:hover{
                            background-color: var(--color-principal) ;
                        }

                    }
`;


export const MsgSucesso = styled.div`
            margin-top: 30px;
            background-color: #b8daffab ;
            border: 1px solid rgba(255, 255, 255, 0.7);
            padding: 10px ;
            border-radius: 4px;

            p{
                color: #004085;
            }

`;

export const Valid = styled.div`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 5px;
            color: rgb(229, 9, 20);
            font-size: 14px;
            padding: 4px 0px 15px 0px ;

            p{
                color: rgb(229, 9, 20);
            }
`;