import { Artist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData } from "../utils.js";

export type getArtistServiceResponse = {response: Artist};

export type getArtistServiceData = getCollectionDataServiceData

export interface getArtistServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_artist';
  service_data: getArtistServiceData;
}