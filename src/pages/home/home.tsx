import { Apresentação, ContainerButtom, ContainerValidate, InputContainer, LoginContainer } from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {

    const [ emailPass , setEmailPass ] = useState<string>('');
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = await axios.get("https://animes-api-k6xs.onrender.com/user");
            const res = api.data;
            console.log(res);
            
           setUser(res)
            
        }

        fetchData()

    },[])
    
    

    const handleEmail = (event:any) => {
        setEmailPass(event.target.value)

       const data = user.filter((e:any) => {return e.email === emailPass})


        
    }

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
                        Quer assistir? Informe seu email cadastrado.
                    </p>

                    <ContainerButtom>

                        <InputContainer>
                            <label htmlFor="login">Email </label>

                            <input type="text" id="login" onChange={handleEmail}/>
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