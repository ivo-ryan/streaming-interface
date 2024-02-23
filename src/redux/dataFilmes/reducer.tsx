import { FilmesActionTypes } from "./types"

const initialState = {
    data: {}
}

export const dataFilmesReducer = (state = initialState , action:any ) => {
    if ( action.type === FilmesActionTypes.NEXT_PAGE) {
        return {...state, 
            data: action.payload
        }
    }

    return state
}