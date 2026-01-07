import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData, getTracksServiceResponse } from "../utils.js";

export type getPodcastEpisodesServiceRespnse = getTracksServiceResponse;

export type getPodcastEpisodeServiceData = getCollectionDataServiceData;

export interface getPodcastEpisodeServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_podcast_episodes';
  service_data: getPodcastEpisodeServiceData;
}