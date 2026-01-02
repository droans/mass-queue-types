import { Album } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema } from "../utils.js";

export type getAlbumServiceResponse = Album;

export type getAlbumPartialServiceSchema = getCollectionDataPartialServiceSchema

export interface getAlbumServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album';
  service_data: getAlbumPartialServiceSchema;
}