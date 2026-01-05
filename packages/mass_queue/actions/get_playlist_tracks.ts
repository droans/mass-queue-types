import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData, getTracksServiceResponse } from "../utils.js";

export type getPlaylistTracksServiceResponse = getTracksServiceResponse;

export interface getPlaylistTracksServiceData extends getCollectionDataServiceData {
  position: number
}

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksServiceData;
}