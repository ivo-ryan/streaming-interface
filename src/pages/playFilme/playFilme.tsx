
import { ContainerPlay } from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { FilmePlay } from "../../components/filme-play/playFilme";

export const PlayFilme = () => {
    

    return (
        <ContainerPlay>
            <Navbar/>
            <FilmePlay/>
        </ContainerPlay>
    )
}