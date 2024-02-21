import { AnimeActionTypes } from "./types"

const initialState = {
    data: []
}

export const dataAnimesReducer = (state = initialState , action ) => {
    if ( action.type === AnimeActionTypes.NEXT_PAGE) {
        return {...state, 
            data: [...state, action.payload ]
        }
    }

    return state
}