import { baseMassQueueServiceWithResponseSchema, getCollectionItemsServiceData, getTracksServiceResponse } from "../utils.js";

export type getAlbumTracksServiceResponse = getTracksServiceResponse;

export type getAlbumTracksServiceData = getCollectionItemsServiceData

export interface getAlbumTracksServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album_tracks';
  service_data: getAlbumTracksServiceData;
}