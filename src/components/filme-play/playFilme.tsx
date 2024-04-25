import * as S from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillPlayCircle } from "react-icons/ai";

export const FilmePlay = () => {

    const { id } = useParams();

    const [ filme, setFilme ] = useState<string>('');
    const [ url , setUrl ] = useState<string>('');
    const [ descript, setDescript ] = useState<string>('');

    useEffect(() => {
    const fetchData = async () => {
        const req = await axios.get(`https://animes-api-k6xs.onrender.com/filmes/${id}`)

        const res = await req.data;

        const { name , description , filme_url } = res;

        setFilme(name)
        setDescript(description)
        setUrl(filme_url)
        
    }

    fetchData()
}, [])

    return(
        <S.Container>
        <S.PlayInVideo>
            <h2> {filme}</h2>
            <meta itemProp="thumbnailUrl" content={url}/>
            
            <S.ContainerVideo
                        >
                            <a href={url} target="_blank" rel="noopener noreferrer">

                            <video 
                            poster={PosterImg} ></video>
                            
                        <S.DispatchPlay>
                            <AiFillPlayCircle/>

                            <p>
                                O player será aberto em uma nova aba 
                            </p>
                        </S.DispatchPlay>
                        
                            </a>
                        </S.ContainerVideo>



            
        </S.PlayInVideo>

        <S.FilmInfo>
            <h2>informações : </h2>              
                <p>
                <span>sinopse : </span>
                {
                    descript
                }
                </p>

        </S.FilmInfo>
        </S.Container>
    )
}