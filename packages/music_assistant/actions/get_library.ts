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

export interface getLibraryPartialSchema {
  config_entry_id: string;
  media_type: MediaTypes;
  favorite?: boolean;
  limit?: number;
  offset?: number;
  album_artists_only?: boolean;
  search?: string;
  order_by?: MediaItemOrder
}

export interface getLibraryServiceSchema
  extends baseMusicAssistantServiceWithResponseSchema {
  service: "get_library"
  service_data: getLibraryPartialSchema  
}