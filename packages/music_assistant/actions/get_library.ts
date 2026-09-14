import { AlbumType } from "../../mass_queue/types/media-items.js";
import { MediaItem, MediaItemOrder, MediaTypes } from "../types.js";
import { baseMusicAssistantServiceWithResponseSchema } from "../utils.js";

export interface getLibraryPartialServiceResponse {
  items: MediaItem[];
  limit: number;
  offset: number;
  ofder_by: MediaItemOrder;
  media_type: MediaTypes;
}
export interface getLibraryServiceResponse {
  response: getLibraryPartialServiceResponse
}

export interface getLibraryServiceData {
  config_entry_id: string;
  media_type: MediaTypes;
  favorite?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
  order_by?: MediaItemOrder;
  album_type?: AlbumType | AlbumType[]
  album_artists_only?: boolean;
  username?: string;
}

export interface getLibraryServiceSchema
  extends baseMusicAssistantServiceWithResponseSchema {
  service: "get_library"
  service_data: getLibraryServiceData
}
