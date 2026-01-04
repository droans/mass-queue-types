import { Playlist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialServiceSchema } from "../utils.js";

export type getPlaylistServiceResponse = {response: Playlist};

export type getPlaylistPartialSchema = getCollectionDataPartialServiceSchema

export interface getPlaylistSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist';
  service_data: getPlaylistPartialSchema;
}