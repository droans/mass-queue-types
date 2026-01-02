import { Playlist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataPartialSchema } from "../utils.js";

export type getPlaylistServiceResponse = Playlist;

export type getPlaylistPartialSchema = getCollectionDataPartialSchema

export interface getPlaylistSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist';
  service_data: getPlaylistPartialSchema;
}