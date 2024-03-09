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
                <video controls autoPlay poster={PosterImg} src={url}>
                     </video>
            </div>

            <div>
                <video src="https://rr3---sn-jvhhjvg2-cnce.googlevideo.com/videoplayback?expire=1710043345&ei=UcDsZYWXCqmuy_sP5P6GCA&ip=45.188.52.225&id=73b9ba8a0a0cbbc8&itag=22&source=blogger&xpc=Egho7Zf3LnoBAQ%3D%3D&mh=1U&mm=31&mn=sn-jvhhjvg2-cnce&ms=au&mv=m&mvi=3&pl=24&susc=bl&eaua=Aaz2Nyfyfhw&mime=video/mp4&vprv=1&dur=1420.202&lmt=1710007678221035&mt=1710013754&txp=1311224&sparams=expire,ei,ip,id,itag,source,xpc,susc,eaua,mime,vprv,dur,lmt&sig=AJfQdSswRQIhAMlv58dhoAGMW0e0SGp9-FAf0T7SlujdyQwM3Yi29ALkAiAdiWXoxaec6-DhV9rW_QXy6WDgRcmr85wjGm_jDB93qA%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRgIhANN8BzymbAO1Cm5MqBjOwR3cyiCa1iDYsZaJakpVH6LDAiEAoEiO-IzeJFrKsMCsX-EJfadIlUTCGUyqpZAlqViKJfs%3D&cpn=_cycXvo9ibt7Cxv4&c=WEB_EMBEDDED_PLAYER&cver=1.20240305.00.00" controls autoPlay></video>
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