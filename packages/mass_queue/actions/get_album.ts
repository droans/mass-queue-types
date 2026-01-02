import { Album } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema } from "../utils.js";

export type getAlbumServiceResponse = Album;

export type getAlbumPartialSchema = getCollectionDataPartialSchema

export interface getAlbumSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_album';
  service_data: getAlbumPartialSchema;
}