import { useSelector } from "react-redux";
import { DataContainer, EpContainer, SectionContainer } from "./style";
import { Link } from "react-router-dom";

export const FilmeItemInfo = () => {
    const { data } = useSelector((root:any) => root.dataFilmesReducer);


    return(
        <SectionContainer>
            <DataContainer>

        
            <h2>{data.name}</h2>

            <img src={data.image_url} alt={data.name} />

            <div className="sinopse">
                <h4>Sinopse :</h4>
                <p>{data.description}</p>
            </div>

            </DataContainer>
        
            <EpContainer>
                <h2>Filme </h2>


                <Link to={`/${data.name}/filme`}>
                <div className="ep-list">
                   <p>
                    {data.name}
                   </p>
                </div>
                </Link>
            </EpContainer>


        </SectionContainer>
    )
}