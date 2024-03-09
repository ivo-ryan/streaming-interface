import * as S from "./style";
import  PosterImg  from '../../assets/poster.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
            
            <div className="container-video">
                <video controls autoPlay poster={PosterImg} src={url}>
                    </video>
            </div> 

            <div className="container-video">
                <video src="https://rr1---sn-jvhhjvg2-cncl.googlevideo.com/videoplayback?expire=1710050809&ei=ed3sZYWmI9SXvPIPjZqpyAc&ip=45.188.52.225&id=67bfa248e4bf0667&itag=18&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&mh=bY&mm=31&mn=sn-jvhhjvg2-cncl&ms=au&mv=m&mvi=1&pcm2cms=yes&pl=24&susc=bl&eaua=Aaz2Nyfyfhw&mime=video/mp4&vprv=1&dur=1420.132&lmt=1704563594212583&mt=1710021676&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,dur,lmt&sig=AJfQdSswRQIgHE0Z5u0DvuyspF7XL3QbTFWrKv_dasSi3R25L45QJJ8CIQDTcWA7QyhlWrZpm2VH2E-ZGG5DUPNXFiqSnErWs2QKLA%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=APTiJQcwRQIgc_2ysUMcfMKqP55UVYo3jUh9da-hHMhp3XDl8-jS8hYCIQDnaNA6BN4mOwNfyUaNmRRdCSQ0FkxLVgO4mCq0qQ8nTg%3D%3D&cpn=9mph2CA7GNXrWT-n&c=WEB_EMBEDDED_PLAYER&cver=1.20240305.00.00" controls></video>
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