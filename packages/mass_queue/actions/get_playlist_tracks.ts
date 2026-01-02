import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema, getTracksServiceResponse } from "../utils.js";

export type getPlaylistTracksServiceResponse = getTracksServiceResponse;

export type getPlaylistTracksPartialSchema = getCollectionDataPartialSchema

export interface getPlaylistTracksSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksPartialSchema;
}