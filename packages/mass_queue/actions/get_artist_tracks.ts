import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema, getTracksServiceResponse } from "../utils.js";

export type getArtistTracksServiceResponse = getTracksServiceResponse;

export type getArtistTracksPartialSchema = getCollectionDataPartialSchema

export interface getArtistTracksSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artust_tracks';
  service_data: getArtistTracksPartialSchema;
}