import { Apresentação, ContainerButtom, ContainerValidate, InputContainer, LoginContainer } from "./style";
import { Navbar } from "../../components/navbar/navbar";

export const Home = () => {
    return (
        <div id="home">

            <div id="back-container">

              <Navbar/>

            <LoginContainer>

                <Apresentação>
                    <h2>
                        Os maiores sucessos do mundo dos animes.
                    </h2>
                     
                     <p>
                        Assista seus animes quando quiser
                     </p>
                </Apresentação>

                <ContainerValidate>
                    <p>
                        Quer assistir? Informe seu email ou número de telefone cadastrados .
                    </p>

                    <ContainerButtom>

                        <InputContainer>
                            <label htmlFor="login">Email ou número de telefone</label>

                            <input type="text" id="login" />
                        </InputContainer>
                    <button>
                        Entrar
                    </button>
                    </ContainerButtom>
                </ContainerValidate>
            </LoginContainer>
            </div>           
        </div>
    )
}