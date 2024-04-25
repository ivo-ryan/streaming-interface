import { useEffect, useState } from 'react';
import { Anime } from '../anime/anime';
import { ContainerMenu } from './style';
import { Filme } from '../filme/filme';
import { Loading } from '../loading/loading';
import { InfoAnimeTypes } from '../../types/infoAnimeTypes';
import { InfoFilmesTypes } from '../../types/infoFilmesTypes';


export const Menu = () => {

    const [ animes, setAnimes ] = useState<InfoAnimeTypes[]>([]);
    const [ filmes, setFilmes ] = useState<InfoFilmesTypes[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false)


    useEffect(() => {
        const animes = async () => {

            setLoading(true)

            const url:Response = (await fetch(" https://animes-api-k6xs.onrender.com "));
            const res = await url.json();

            setLoading(false)

            setAnimes(res)
        
        }

        animes()
    }, [])

    useEffect(() => {
            const fetchData = async () => {
                setLoading(true)

                const req = await fetch("https://animes-api-k6xs.onrender.com/filmes")

                const res = await req.json();

                setLoading(false);

                setFilmes(res)
                
            }


            fetchData()

    },[])



    return (
        <>  

        <ContainerMenu> 

             {
            loading && <Loading/>
        }   

            {
                animes.map(({name , image_url, _id} , index) => {
                    return (
                        <Anime key={index}
                        name={name}
                        image_url={image_url}
                        id={_id}
                    
                        />
                    )
                })
            }
    

            {
                filmes.map(({name,image_url, _id}, index) => {
                    return(
                        
                        <Filme name={name}
                               image_url={image_url}
                               id={_id}
                               key={index}
                            />
                    )
                })
            }

        </ContainerMenu>

        </>
    )
}