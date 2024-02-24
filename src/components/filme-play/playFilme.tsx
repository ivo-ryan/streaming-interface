import { useSelector } from "react-redux";
import { FilmInfo, PlayInVideo } from "./style";
import  PosterImg  from '../../assets/poster.jpg';

export const FilmePlay = () => {

    const { data } = useSelector((e:any) => e.dataFilmesReducer)

    return(
        <>
        <PlayInVideo>
            <h2> {data.name}</h2>
            <div className="container-video">
                <video src={data.filme_url} controls poster={PosterImg} preload="auto" role="application"> </video>
            </div>
        </PlayInVideo>

        <FilmInfo>
            <h2>Description</h2>
            <div className="decription-container">
                {
                    data.description
                }
            </div>
        </FilmInfo>
        </>
    )
}