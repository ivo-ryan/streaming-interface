import { Link } from "react-router-dom";
import { ItemInformation } from "../../components/item-info/itemInfo";
import { InfoContainer } from "./style";

export const Information = () => {
    

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

            <ItemInformation/>


        </InfoContainer>
    )
}