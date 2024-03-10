import * as S from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { useEffect, useState } from "react";
import { AiOutlineArrowRight , AiOutlineArrowLeft , AiOutlineMenu } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import axios from "axios";

interface Ep {
    type: string,
    url: string
}

export const VideoPlay = () => {

    const { id, index } = useParams();

    const video = Number(index);

    const [ Bnext, setBNext ] = useState<number>( video )
    const back:number = Bnext ;

    const [ anime , setAnime ] = useState<string>("");
    const [ eps, setEps ] = useState([]);
    const [ descript, setDescript ] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
                const req = await axios.get(`https://animes-api-k6xs.onrender.com/${id} `)

                const res = await req.data;
                const { name, description, epsodios } = res;

                setAnime(name)
                setDescript(description)
                setEps(epsodios)
        }

        fetchData()
    }, []);

    const next = eps;
    const limit:number = next.length;
    const res = next.filter(( ep:object , i:number ) => { return i === Bnext  
    ep
    });
        const showList = {
            view: "flex",
            hide: "none"
        };

    const [ display, setDisplay ] = useState<string>(showList.hide)

    const handleClickToShowList = () => {
        if (display === showList.hide) {
            setDisplay(showList.view)
        }

        if (display === showList.view) {
            setDisplay(showList.hide)
        }
    }
    

    return(
        <>
        <S.PlayInVideo>
            {
                res.map((play:Ep, index: number) => {
                    return (
                        <div key={index}>
                        <h2 > {anime}- {play.type}</h2>
                        <meta itemProp="thumbnailUrl" content={play.url}/>

                        <div 
                        className="container-video"
                        >
                            <video src={play.url} poster={PosterImg} autoPlay controls  ></video>
                            
                        </div>

                        
                        </div>

                    )
                })
            }
           
        </S.PlayInVideo>

        <S.ListEps>
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

            <div className="list-svg" onClick={() => handleClickToShowList()}>

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

            <S.Description>
                <h3>Informações :</h3>
                <p><span>sinopse: </span>
                {
                    descript
                }
                </p>
            </S.Description>
            
            <S.BlockEp display={display}>
                
                {
                    eps.map((ep:Ep , index:number) => {
                        return (
                            <li onClick={() => setBNext( index) } key={index}>
                                <p >
                                    {ep.type}</p></li>

                        )
                    })
                }
            </S.BlockEp>
            
        </S.ListEps>
        </>
    )
}