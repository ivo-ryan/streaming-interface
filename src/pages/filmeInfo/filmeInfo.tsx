import { InfoContainer } from "./style";;
import { FilmeItemInfo } from "../../components/filme-info/filme-info";
import { Navbar } from "../../components/navbar/navbar";

export const FilmeInfo = () => {
    

    return(
        <InfoContainer>
             <Navbar navigation="/dashboard"/>

            <FilmeItemInfo/>


        </InfoContainer>
    )
}