import { Album } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData } from "../utils.js";

export interface getAlbumServiceResponse {response: Album};

export type getAlbumServiceData = getCollectionDataServiceData

export interface getAlbumServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album';
  service_data: getAlbumServiceData;
}