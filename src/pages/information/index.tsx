import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemInformation } from "../../components/item-info/itemInfo";
import { InfoContainer } from "./style";

export const Information = () => {

    const { data } = useSelector((rootReducer:any) => rootReducer.dataAnimesReducer)

    console.log(data);
    

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