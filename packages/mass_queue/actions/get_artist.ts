import { Artist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema } from "../utils.js";

export type getArtistServiceResponse = {response: Artist};

export type getArtistPartialServiceSchema = getCollectionDataPartialServiceSchema

export interface getArtistServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artist';
  service_data: getArtistPartialServiceSchema;
}