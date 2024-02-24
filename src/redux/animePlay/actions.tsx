import { PlayInVideo } from "./types";

export const animePlayToVideo = (payload:any) => ({
    type: PlayInVideo.AUTO_PLAY,
    payload
});