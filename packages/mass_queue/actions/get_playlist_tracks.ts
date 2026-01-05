import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData, getTracksServiceResponse } from "../utils.js";

export interface getPlaylistTracksServiceResponse extends getTracksServiceResponse {
  position: number
}

export type getPlaylistTracksServiceData = getCollectionDataServiceData;

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksServiceData;
}