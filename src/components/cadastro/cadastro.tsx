import { BiXCircle } from 'react-icons/bi';
import * as S from './style';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Cadastro = () => {

const valid = {
    checked: "green",
    notValid: "red",
    padrao: "#ffffffb2"
}

const msg = {
    view: "flex",
    hide: "none"
}


const re:RegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const [ check, setCheck ] = useState<string>(valid.padrao);
const [ checkPass, setCheckPass ] = useState<string>(valid.padrao);
const [ display, setDisplay ] = useState<string>(msg.hide);
const [ displayPass, setDisplayPass ] = useState<string>(msg.hide);

const [ user, setUser ] = useState<string>("");
const [ password , setPassword ] = useState<string>("");
const [ loading, setLoading ] = useState<boolean>(false);
const [ dispatch, setDispatch ] = useState(false)


  const handleChangeToEmail = (event:any) => {
        if (re.test(event.target.value)) {
            setUser(event.target.value);
            setCheck(valid.checked);
            setDisplay(msg.hide);
        }else{
            setCheck(valid.notValid);
            setDisplay(msg.view);
            
        }
        
  }

  const handleChangeToPassword = (event:any) => {
        if (event.target.value.length >= 4 ) {
            setPassword(event.target.value)
            setCheckPass(valid.checked);
            setDisplayPass(msg.hide)
            
        }else{
            setCheckPass(valid.notValid)
            setDisplayPass(msg.view);
        }

        if (event.target.value.length > 15 ) {
            setCheckPass(valid.notValid);
            setDisplayPass(msg.view);
        }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!user.length || !password.length) {
        return
    }

    
    setLoading(true)
    
    setDispatch(true);
    const api =  axios.create({
        baseURL: "https://animes-api-k6xs.onrender.com"
    })

    const response = await api.post("/user",{
        email: user,
        senha: password
    })

    setLoading(false);

  }

    return (
        <S.FormContainer >

        <S.Container>
            <header>
                <h1>Cadastre-se</h1>
            </header>
        <S.FormC>

        <form onSubmit={handleSubmit}>

           <S.BoxInput>

            <S.InputContainer colorb={check}>

                <label htmlFor="email">Email </label>

                <input 
                type="email" 
                name="email ou numero" 
                id="email" 
                onChange={handleChangeToEmail} autoComplete='true'
              />

            </S.InputContainer>

            <S.Valid display={display}> <BiXCircle/> <p>Informe um email válido!</p> </S.Valid>

            </S.BoxInput>

            <S.BoxInput>

            <S.InputContainerPass colorb={checkPass}>

                <label htmlFor="password">Senha</label>

                <input 
                type="password" 
                name="senha" 
                id="password" 
                onChange={handleChangeToPassword}/>

            </S.InputContainerPass>

                <S.ValidPass display={displayPass}>
                <BiXCircle/>
                    <p>A senha deve ter entre 4 e 15 caracteres!</p>
                </S.ValidPass>

            </S.BoxInput> 
            <S.Submit>
                {
                    dispatch === true ? 
                    <Link to={"/dashboard"}>
                         <button >Entrar</button>
                    </Link>
                    :
                    <button>Cadastrar</button>
                }
                
            </S.Submit>

        </form>

            </S.FormC> 
            {loading && 
            <S.MsgSucesso>
                <p>Usuário cadastrado com sucesso!</p>
            </S.MsgSucesso>  }
            

        </S.Container>
        </S.FormContainer>
    )
}