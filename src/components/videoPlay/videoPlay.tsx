import { useDispatch, useSelector } from "react-redux";
import { ListEps, PlayInVideo } from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { animePlayToVideo } from "../../redux/animePlay/actions";
import { useState } from "react";

export const VideoPlay = () => {

    const [ Bnext, setBNext ] = useState(0)

    const { video } = useSelector((e:any) => e.animePlayReducer);

    console.log(video);
    

    const { data } = useSelector((e:any) => e.dataAnimesReducer);

    const dispatch = useDispatch();



    const next = data.episodios;
    const res = next.filter(( e:any, i:number )=> i === Bnext)
    console.log(res)


    return(
        <>
        <PlayInVideo>
            <h2> {data.name}- {video.type}</h2>
            <div className="container-video">
                <video src={video.url} controls poster={PosterImg} preload="auto" role="application"> </video>
            </div>
        </PlayInVideo>

        <ListEps>

            <div>
                <button onClick={() => setBNext(Bnext + 1)}>Next</button>
            </div>
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