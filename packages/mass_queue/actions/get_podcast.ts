import { Podcast } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData } from "../utils.js";

export interface getPodcastServiceResponse {response: Podcast};

export type getPodcastServiceData = getCollectionDataServiceData

export interface getPodcastServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_podcast';
  service_data: getPodcastServiceData;
}