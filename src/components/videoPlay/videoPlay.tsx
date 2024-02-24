import { useDispatch, useSelector } from "react-redux";
import { ListEps, PlayInVideo } from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { animePlayToVideo } from "../../redux/animePlay/actions";

export const VideoPlay = () => {

    const { video } = useSelector((e:any) => e.animePlayReducer)

    const { data } = useSelector((e:any) => e.dataAnimesReducer)

    const dispatch = useDispatch()

    return(
        <>
        <PlayInVideo>
            <h2> {data.name} {video.type}</h2>
            <div className="container-video">
                <video src={video.url} controls poster={PosterImg} preload="auto" role="application"> </video>
            </div>
        </PlayInVideo>

        <ListEps>

            <div></div>
            <div className="ep-container">
                {
                    data.episodios.map((ep:any , index:number) => {
                        return (
                            <li onClick={() => dispatch(animePlayToVideo(ep))} key={index}>
                                <p>
                                    {ep.type}</p></li>

                        )
                    })
                }
            </div>
            
        </ListEps>
        </>
    )
}