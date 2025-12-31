import { MediaItem, MediaTypes } from "../types.js";
import { baseMusicAssistantServiceWithResponseSchema } from "../utils.js";

export interface searchPartialServiceResponse {
  artists: MediaItem[];
  albums: MediaItem[];
  tracks: MediaItem[];
  playlists: MediaItem[];
  radio: MediaItem[];
  audiobooks: MediaItem[];
  podcasts: MediaItem[];
}
export interface searchServiceResponse {
  response: searchPartialServiceResponse
}

export interface searchPartialSchema {
  config_entry_id: string;
  name: string;
  media_type?: MediaTypes[];
  artist?: string;
  album?: string;
  limit?: number;
  library_only?: boolean;
}

export interface searchServiceSchema
  extends baseMusicAssistantServiceWithResponseSchema {
  service: "search"
  service_data: searchPartialSchema  
}