import { baseMassQueueServiceWithResponseSchema, getCollectionItemsServiceData, getTracksServiceResponse } from "../utils.js";

export type getArtistTracksServiceResponse = getTracksServiceResponse;

export type getArtistTracksServiceData = getCollectionItemsServiceData

export interface getArtistTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artist_tracks';
  service_data: getArtistTracksServiceData;
}