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
            <meta name="google-site-verification" content="quSgRZsi5fhXZXd4-URcrB6F6BnLy09y0A13_E1kVJA" />
            <meta name="p:domain_verify" content="8db0a86299b3e90666e165686fe012be" />
            <div className="container-video">
                <video controls autoPlay poster={PosterImg} src={url}>
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