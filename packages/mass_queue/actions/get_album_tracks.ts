import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema, getTracksServiceResponse } from "../utils.js";

export type getAlbumTracksServiceResponse = getTracksServiceResponse;

export type getAlbumTracksPartialSchema = getCollectionDataPartialSchema

export interface getAlbumTracksSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album_tracks';
  service_data: getAlbumTracksPartialSchema;
}