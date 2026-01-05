import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData, getTracksServiceResponse, Track } from "../utils.js";


export interface PlaylistTrack extends Track {
  position: number;
}

export interface getPlaylistTracksServiceResponse {
  response: {
    tracks: PlaylistTrack[];
  }  
}

export type getPlaylistTracksServiceData = getCollectionDataServiceData;

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksServiceData;
}