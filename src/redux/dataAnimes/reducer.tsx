import { AnimeActionTypes } from "./types"

const initialState = {
    data: {}
}

export const dataAnimesReducer = (state = initialState , action:any ) => {
    if ( action.type === AnimeActionTypes.NEXT_PAGE) {
        return {...state, 
            data: action.payload
        }
    }

    return state
}