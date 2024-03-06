import { useEffect, useState } from "react";
import { DataContainer, EpContainer, SectionContainer } from "./style";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const FilmeItemInfo = () => {

const { id } = useParams();

const [ filme, setFilme ] = useState<string>('');
const [ image , setImage ] = useState<string>('')
const [ descript, setDescript ] = useState<string>('');

useEffect(() => {
    const fetchData = async () => {
        const req = await axios.get(`https://animes-api-k6xs.onrender.com/filmes/${id}`)

        const res = await req.data;

        const { name , description , image_url } = res;

        setFilme(name)
        setDescript(description)
        setImage(image_url)
        
    }

    fetchData()
}, [])


    return(
        <SectionContainer>
            <DataContainer>

        
            <h2>{filme}</h2>

            <img src={image} alt={filme} />

            <div className="sinopse">
                <h4>Sinopse :</h4>
                <p>{descript}</p>
            </div>

            </DataContainer>
        
            <EpContainer>
                <h2>Filme </h2>


                <Link to={`/filme/${id}`}>
                <div className="ep-list">
                   <p>
                    {filme}
                   </p>
                </div>
                </Link>
            </EpContainer>


        </SectionContainer>
    )
}