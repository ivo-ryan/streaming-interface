import * as S from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const FilmePlay = () => {

    const { id } = useParams();

    const [ filme, setFilme ] = useState<string>('');
    const [ url , setUrl ] = useState<string>('')
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
            
            <div className="container-video">
                <video controls autoPlay  src="https://ns5019087.ip-15-235-118.net/upmp4/animes/s/solo-leveling/01.mp4">
                    </video>
            </div> 
            
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