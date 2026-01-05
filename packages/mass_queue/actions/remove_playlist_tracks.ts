import { baseMassQueueServiceSchema } from "../utils.js";

export interface removePlaylistTracksServiceData {
  config_entry_id: string;
  playlist_id: number | string;
  positions_to_remove: number[]
}

export interface removePlaylistTracksServiceSchema extends baseMassQueueServiceSchema {
  service: "remove_playlist_tracks";
  service_data: removePlaylistTracksServiceData;
}