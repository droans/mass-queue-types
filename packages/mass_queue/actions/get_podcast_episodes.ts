import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData, Track } from "../utils.js";

export interface getPodcastEpisodesServiceRespnse {
  response: {
    episodes: Track[];
  }
};

export type getPodcastEpisodeServiceData = getCollectionDataServiceData;

export interface getPodcastEpisodeServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_podcast_episodes';
  service_data: getPodcastEpisodeServiceData;
}