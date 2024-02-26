import { useDispatch, useSelector } from "react-redux";
import { ListEps, PlayInVideo } from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { animePlayToVideo } from "../../redux/animePlay/actions";
import { useState } from "react";
import { AiOutlineArrowRight , AiOutlineArrowLeft , AiOutlineMenu } from 'react-icons/ai';

export const VideoPlay = () => {

    const { video } = useSelector((e:any) => e.animePlayReducer);

    const [ Bnext, setBNext ] = useState<number>(video)
    const back:number = Bnext ;
    
    

    const { data } = useSelector((e:any) => e.dataAnimesReducer);

    const dispatch = useDispatch();

    const next:[] = data.episodios;
    const limit:number = next.length;
    const res = next.filter(( e:object , i:number )=> i === Bnext);
    

    return(
        <>
        <PlayInVideo>
            {
                res.map((play:any, index: number) => {
                    return (
                        <>
                        <h2> {data.name}- {play.type}</h2>
                        <div 
                        key={index}
                        className="container-video">
                            <video src={play.url} controls poster={PosterImg} preload="auto" role="application"> </video>
                        </div>
                        </>

                    )
                })
            }
           
        </PlayInVideo>

        <ListEps>
            <div className="pagination">

            
            <div>      
                {
                    back === 0 ? false : (
            
                        <div onClick={() => setBNext(Bnext -1)} className="buttom">

                        <AiOutlineArrowLeft/>
                        <span>ANTERIOR</span>
                        
                        </div>
                    )
                }
             </div>

            <div className="list-svg">

            <AiOutlineMenu/>

            </div>

            <div>

            {
                Bnext === limit-1 ? false : (
                    <div onClick={() => setBNext(Bnext + 1)} className="buttom">
                        
                        <span>PRÓXIMO</span>
                       <AiOutlineArrowRight/>
                    
                    </div>
                )
            }
            </div>

            </div>
            
            <div className="ep-container" >
                
                {
                    data.episodios.map((ep:any , index:number) => {
                        return (
                            <li onClick={() => dispatch(animePlayToVideo(index), setBNext( index))} key={index}>
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