
import { ContainerPlay } from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { FilmePlay } from "../../components/filme-play/playFilme";
import { useParams } from "react-router-dom";

export const PlayFilme = () => {
    
    const { id } = useParams()

    return (
        <ContainerPlay>
            <Navbar navigation={`/filme-info/${id}`}/>
            <FilmePlay/>
        </ContainerPlay>
    )
}