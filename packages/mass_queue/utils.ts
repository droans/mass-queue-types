export interface baseMassQueueServiceSchema {
  type: "call_service";
  domain: "mass_queue";
  service: string;
}

export interface baseMassQueueServiceWithResponseSchema
  extends baseMassQueueServiceSchema {
  return_response: true;
}

export interface queueItemPartialSchema {
  entity: string;
  queue_item_id: string;
}
export interface Track {
  media_title: string;
  media_album_name: string;
  media_artist: string;
  media_content_id: string;
  media_image: string;
  local_image_encoded?: string;
  favorite: boolean;
  duration?: number;
}

export type Tracks = Track[];

export interface getTracksServiceResponse {
  response: {
    tracks: Tracks
  };
}

export interface getCollectionDataPartialServiceSchema {
  uri: string;
  config_entry_id: string;
}