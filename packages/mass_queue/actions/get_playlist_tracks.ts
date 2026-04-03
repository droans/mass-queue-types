import { baseMassQueueServiceWithResponseSchema, getCollectionItemsServiceData, Track } from "../utils.js";


export interface PlaylistTrack extends Track {
  position: number;
  release_date: string;
}

export interface getPlaylistTracksServiceResponse {
  response: {
    tracks: PlaylistTrack[];
  }  
}

export type getPlaylistTracksServiceData = getCollectionItemsServiceData;

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksServiceData;
}