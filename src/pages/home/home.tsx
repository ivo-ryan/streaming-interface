import { Apresentação, ContainerButtom, ContainerValidate, InputContainer, LoginContainer } from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Data } from "../../types/userHomeTypes";


export const Home = () => {

    const borderColor = {
        notValid: "red",
        padrao: "#ffffffb2",
    };

    const [ emailPass , setEmailPass ] = useState<string>('');
    const [ user, setUser ] = useState<Data[]>([]);
    const [ valid, setValid ] = useState<string>(borderColor.padrao);

    useEffect(() => {
        const fetchData = async () => {
            const api = await axios.get("https://animes-api-k6xs.onrender.com/user");
            const res = api.data;            
           setUser(res);          
        }

        fetchData()

    },[]);

    const data = user.filter((e:Data ) => {return e.email === emailPass});
    const emailRes = data.map((e:Data) => e.email); 
    
    const handleClick = () => {
        
        if (emailRes[0]  !== emailPass) {
            return setValid(borderColor.notValid);
            
        }

    }
      

    const handleEmail = (event:any) => {
        setEmailPass(event.target.value);
    }

    const hide:boolean = true

    return (
        <div id="home">

            <div id="back-container">

              <Navbar hide={hide}/>

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

                        <InputContainer colorb={valid}>
                            <label htmlFor="login">Email </label>

                            <input type="text" id="login" onChange={handleEmail}/>
                        </InputContainer>

                    {
                        emailRes[0] === emailPass ? (
                            <Link to={"/dashboard"}>
                        <button onClick={handleClick}>
                            Entrar
                        </button>
                            </Link>
                        ): 
                        <button onClick={handleClick}>
                        Entrar
                        </button>
                    }
                    

                    </ContainerButtom>
                </ContainerValidate>
            </LoginContainer>
            </div>           
        </div>
    )
}