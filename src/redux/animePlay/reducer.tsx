import { PlayInVideo } from "./types"

const initialState = {
    video: {}
}

export const animePlayReducer = (state = initialState , action:any ) => {
    if ( action.type === PlayInVideo.AUTO_PLAY) {
        return {...state, 
            video: action.payload
        }
    }

    return state
}