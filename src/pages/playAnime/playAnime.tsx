import { VideoPlay } from "../../components/videoPlay/videoPlay";
import { ContainerPlay } from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";

export const PlayAnime = () => {
    const { id } = useParams();
    

    return (
        <ContainerPlay>
            <Navbar navigation={`/info/${id}`}/>
            <VideoPlay/>
        </ContainerPlay>
    )
}