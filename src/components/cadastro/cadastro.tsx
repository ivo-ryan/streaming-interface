import { BiXCircle } from 'react-icons/bi';
import * as S from './style';
import { useState } from 'react';

export const Cadastro = () => {

const [ user, setUser ] = useState<string>("");

    const re:RegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChangeToEmail = (event:any) => {
        if (re.test(event.target.value)) {
            console.log("despachado");
            
            return setUser(event.target.value);
        }else{
            console.log("email errado");
            
        }
        
        
  }

  const handleChangeToPassword = (event:any) => {
        if (event.target.value.length > 4 ) {
            console.log("Foi");
            
        }
  }

    return (
        <S.FormContainer >

        <S.Container>
            <header>
                <h1>Cadastre-se</h1>
            </header>
        <S.FormC>

        <form >

            <S.InputContainer>
                <label htmlFor="email">Email </label>
                <input type="email" name="email ou numero" id="email" onChange={handleChangeToEmail}/>
            </S.InputContainer>
            <S.Valid> <BiXCircle/> <p>Informe um email válido!</p> </S.Valid>

            <S.InputContainer>
                <label htmlFor="password">Senha</label>
                <input type="password" name="senha" id="password" onChange={handleChangeToPassword}/>
            </S.InputContainer>
                <S.Valid>
                <BiXCircle/>
                    <p>A senha deve ter entre 4 e 15 caracteres!</p>
                </S.Valid>
            <S.Submit>
                
                <button>Entrar</button>
            </S.Submit>

        </form>

            </S.FormC> 

            <S.MsgSucesso>
                <p>Usuário cadastrado com sucesso!</p>
            </S.MsgSucesso>  

        </S.Container>
        </S.FormContainer>
    )
}