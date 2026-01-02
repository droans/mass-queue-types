import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema, getTracksServiceResponse } from "../utils.js";

export type getArtistTracksServiceResponse = getTracksServiceResponse;

export type getArtistTracksPartialServiceSchema = getCollectionDataPartialServiceSchema

export interface getArtistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artust_tracks';
  service_data: getArtistTracksPartialServiceSchema;
}