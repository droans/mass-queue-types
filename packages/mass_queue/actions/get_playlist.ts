import { Playlist } from "../types/media-items.js";
import { baseMassQueueServiceWithResponseSchema, getCollectionDataServiceData } from "../utils.js";

export interface getPlaylistServiceResponse {response: Playlist};

export type getPlaylistServiceData = getCollectionDataServiceData

export interface getPlaylistServiceSchema extends baseMassQueueServiceWithResponseSchema {
  service: 'get_playlist';
  service_data: getPlaylistServiceData;
}