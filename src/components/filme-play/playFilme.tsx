import { useSelector } from "react-redux";
import * as S from "./style";
import  PosterImg  from '../../assets/poster.jpg';

export const FilmePlay = () => {

    const { data } = useSelector((e:any) => e.dataFilmesReducer)

    return(
        <S.Container>
        <S.PlayInVideo>
            <h2> {data.name}</h2>
            <meta itemProp="thumbnailUrl" content={data.filme_url}/>
            <div className="container-video">
                <video src={data.filme_url} controls poster={PosterImg} > </video>
            </div>
        </S.PlayInVideo>

        <S.FilmInfo>
            <h2>informações : </h2>              
                <p>
                <span>sinopse : </span>
                {
                    data.description
                }
                </p>

        </S.FilmInfo>
        </S.Container>
    )
}