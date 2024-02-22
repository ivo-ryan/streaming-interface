import { useEffect, useState } from 'react';
import { Anime } from '../anime/anime';
import { SectionAnimes } from './style';


export const Animes = () => {

    const [ animes, setAnimes ] = useState([]);
    const [ loading, setLoading ] = useState<boolean>(false)

    useEffect(() => {
        const animes = async () => {

            setLoading(false)

            const url:Response = (await fetch(" https://animes-api-k6xs.onrender.com "));
            const res = await url.json();

            setLoading(true)

            setAnimes(res)
        
        }

        animes()
    }, [])



    return (
        <SectionAnimes>
            {
                animes.map(({name , description , image_url, epsodios,} , index) => {
                    return (
                        <Anime 
                        name={name}
                        description={description}
                        image_url={image_url}
                        episodios={epsodios}
                        key={index}
                        />
                    )
                })
            }
        </SectionAnimes>
    )
}