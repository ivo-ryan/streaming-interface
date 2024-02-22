import { useSelector } from "react-redux";
import { DataContainer, EpContainer, SectionContainer } from "./style";

export const ItemInformation = () => {
    const { data } = useSelector((rootReducer:any) => rootReducer.dataAnimesReducer)

    console.log(data);

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
                <h2>Episódios</h2>

                <div className="ep-list">
                    {
                        data.episodios.map((ep:any, index:number) => {
                            return(
                                <li key={index}>
                                    <p> <span>{data.name}</span>
                                        {ep.type}</p></li>
                            )
                        })
                    }
                </div>
            </EpContainer>

        </SectionContainer>
    )
}