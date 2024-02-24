import { Link } from "react-router-dom";
import { InfoContainer } from "./style";;
import { FilmeItemInfo } from "../../components/filme-info/filme-info";

export const FilmeInfo = () => {
    

    return(
        <InfoContainer>
             <nav>
                <li><h1>Netflix</h1></li>
                <li>    
                      <Link to={"/"}>
                        <button>Voltar</button>
                        </Link> 

                </li>

            </nav>

            <FilmeItemInfo/>


        </InfoContainer>
    )
}