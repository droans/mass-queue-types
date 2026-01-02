import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema, getTracksServiceResponse } from "../utils.js";

export type getPlaylistTracksServiceResponse = getTracksServiceResponse;

export type getPlaylistTracksPartialServiceSchema = getCollectionDataPartialServiceSchema

export interface getPlaylistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist_tracks';
  service_data: getPlaylistTracksPartialServiceSchema;
}