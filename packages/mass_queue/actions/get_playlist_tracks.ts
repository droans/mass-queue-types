import { baseMassQueueServiceWithResponseSchema } from "../utils.js";

export interface playlistTrack {
  media_title: string;
  media_album_name: string;
  media_artist: string;
  media_content_id: string;
  media_image: string;
  local_image_encoded?: string;
  favorite: boolean;
}

export type playlistTracks = playlistTrack[];

export interface getPlaylistTracksServiceResponse {
  response: {
    tracks: playlistTracks
  };
}

export interface getPlaylistTracksPartialSchema {
  uri: string;
  config_entry_id: string;
  page?: number;
}

export interface getPlaylistTracksServiceSchema
  extends baseMassQueueServiceWithResponseSchema {
  service: "get_playlist_tracks";
  service_data: getPlaylistTracksPartialSchema;
}
