import { ItemInformation } from "../../components/item-info/itemInfo";
import { InfoContainer } from "./style";
import { Navbar } from "../../components/navbar/navbar";

export const Information = () => {
    

    return(
        <InfoContainer>
            <Navbar/>

            <ItemInformation/>


        </InfoContainer>
    )
}