import { useSelector } from "react-redux"

export const Information = () => {

    const { data } = useSelector(rootReducer => rootReducer.dataAnimesReducer)

    console.log(data);
    

    return(
        <main>
        
        </main>
    )
}