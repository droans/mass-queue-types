import { Artist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema } from "../utils.js";

export type getArtistServiceResponse = Artist;

export type getArtistPartialSchema = getCollectionDataPartialSchema

export interface getArtistSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artist';
  service_data: getArtistPartialSchema;
}