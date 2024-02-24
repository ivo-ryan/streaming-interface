import { useEffect, useState } from 'react';
import { Anime } from '../anime/anime';
import { ContainerMenu } from './style';
import { Filme } from '../filme/filme';
import { Loading } from '../loading/loading';


export const Menu = () => {

    const [ animes, setAnimes ] = useState([]);
    const [ filmes, setFilmes ] = useState([]);
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

        {
            loading && <Loading/>
        }

        

        <ContainerMenu>    

            {
                animes.map(({name , description , image_url, epsodios,} , index) => {
                    return (
                        <Anime key={index}
                        name={name}
                        description={description}
                        image_url={image_url}
                        episodios={epsodios}
                    
                        />
                    )
                })
            }
    

            {
                filmes.map(({name,image_url, description, filme_url }, index) => {
                    return(
                        
                        <Filme name={name}
                               image_url={image_url}
                               description={description}
                               filme_url={filme_url}
                               key={index}
                            />
                    )
                })
            }

        </ContainerMenu>

        </>
    )
}