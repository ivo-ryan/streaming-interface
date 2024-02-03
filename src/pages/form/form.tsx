import { FormContainer, MsgSucesso, Valid} from "./style";
import {BiXCircle} from 'react-icons/bi';

export const Form  = () => {
    return (
        <>
      
        <section id="image">   

        <nav>
            <h1>Netflix</h1>
        </nav>

        <FormContainer >

            <div className="container">
                <header>
                    <h1>Cadastre-se</h1>
                </header>
        <div className="form-container">

            <form >

                <div className="input">
                    <label htmlFor="name">Email ou número de telefone</label>
                    <input type="text" name="nome" id="name"/>
                </div>
                <Valid> <BiXCircle/> <p>Informe um email ou número de telefone válido!</p> </Valid>

                <div className="input">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="senha" id="password"/>
                </div>
                    <Valid>
                    <BiXCircle/>
                        <p>A senha deve ter entre 4 e 15 caracteres!</p>
                    </Valid>
                <div className="submit">
                    
                    <button>Entrar</button>
                </div>
 
            </form>

                </div> 

                <MsgSucesso>
                    <p>Usuário cadastrado com sucesso!</p>
                </MsgSucesso>  

            </div>
            </FormContainer>

        </section>
        </>
    )

}