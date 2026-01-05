import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema, getTracksServiceResponse } from "../utils.js";

export type getPlaylistTracksServiceResponse = getTracksServiceResponse;

export interface getPlaylistTracksPartialServiceSchema extends getCollectionDataPartialServiceSchema {
  position: number
}

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksPartialServiceSchema;
}