import { useDispatch, useSelector } from "react-redux";
import { DataContainer, EpContainer, SectionContainer } from "./style";
import { Link } from "react-router-dom";
import { animePlayToVideo } from "../../redux/animePlay/actions";

export const ItemInformation = () => {
    const { data } = useSelector((rootReducer:any) => rootReducer.dataAnimesReducer)

    const dispatch = useDispatch();


    return(
        <SectionContainer>
            <DataContainer>

        
            <h2>{data.name}</h2>

            <img src={data.image_url} alt={data.name} />

            <div className="sinopse">
                <h4> Sinopse: </h4>
                <p>{data.description}</p>
            </div>

            </DataContainer>
        
            <EpContainer>
                <h2>Episódios</h2>

                <div className="ep-list">
                    {
                        data.episodios.map((ep:any , index:number) => {
                            return(
                               
                                <Link  to={`/${data.name}/video`} key={index}>
                                <li onClick={() => dispatch(animePlayToVideo(ep))}>
                                    <p> <span>{data.name}</span>
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