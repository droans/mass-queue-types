import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema, getTracksServiceResponse } from "../utils.js";

export type getAlbumTracksServiceResponse = getTracksServiceResponse;

export type getAlbumTracksPartialServiceSchema = getCollectionDataPartialServiceSchema

export interface getAlbumTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album_tracks';
  service_data: getAlbumTracksPartialServiceSchema;
}