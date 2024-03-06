import { DataContainer, EpContainer, SectionContainer } from "./style";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Eps, InfoAnimeTypes } from "../../types/infoAnimeTypes";

export const ItemInformation = () => {
    const { id } = useParams();

    const [anime, setAnime] = useState<string>("");
    const [ image , setImage ] = useState<string>("");
    const [ descript, setDescript ] = useState<string>("");
    const [ ep, setEp ] = useState<[]>([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://animes-api-k6xs.onrender.com/${id} `);

            const res = await req.data;
            const { name, description , image_url , epsodios } :InfoAnimeTypes = res

            setAnime(name);
            setDescript(description);
            setImage(image_url);
            setEp(epsodios);
            
        }

    fetchData()
       
    }, [])
    


    return(
        <SectionContainer>
            <DataContainer>

        
            <h2>{anime}</h2>

            <img src={image} alt={anime} />

            <div className="sinopse">
                <h4> Sinopse: </h4>
                <p>{descript}</p>
            </div>

            </DataContainer>
        
            <EpContainer>
                <h2>Episódios</h2>

                <div className="ep-list">
                    {
                        ep.map((ep:Eps , index:number) => {
                            return(
                               
                                <Link  to={`/video/${id}/${index}`} key={index}>
                                <li>
                                    <p> <span>{anime}</span>
                                        {ep.type}</p></li>

                                </Link>
                            )
                        })
                    }
                </div>
            </EpContainer>


        </SectionContainer>
    )
}