import { VideoPlay } from "../../components/videoPlay/videoPlay";
import { ContainerPlay } from "./style";
import { Navbar } from "../../components/navbar/navbar";

export const PlayAnime = () => {
    

    return (
        <ContainerPlay>
            <Navbar/>
            <VideoPlay/>
        </ContainerPlay>
    )
}