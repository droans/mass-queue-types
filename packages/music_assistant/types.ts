
export type MediaTypes = 
  "artist"
  | "album"
  | "audiobook"
  | "playlist"
  | "podcast"
  | "radio"
  | "track"

export type MediaItemOrder = 
  "name"
  | "name_desc"
  | "sort_name"
  | "sort_name_desc"
  | "timestamp_added"
  | "timestamp_added_desc"
  | "last_played"
  | "last_played_desc"
  | "play_count"
  | "play_count_desc"
  | "year"
  | "year_desc"
  | "position"
  | "position_desc"
  | "artist_name"
  | "artist_name_desc"
  | "random"
  | "random_play_count"

interface baseMediaItem {
  media_type: MediaTypes;
  uri: string;
  name: string;
  version: string;
  image?: string | null;
  favorite?: boolean;
  explicit?: boolean | null;
  discart_image?: boolean | null;
  fanart_image?: boolean | null;
}

export interface MediaItem extends baseMediaItem {
  artists?: baseMediaItem[];
  album?: baseMediaItem;
}

export interface AudioFormatSchema {
  provider: string;
  item_id: string;
  content_type: string;
  sample_rate: number;
  bit_depth: number;
  bitrate?: number;
}
export interface QueueItemSchema {
  queue_item_id: string;
  name: string;
  duration?: number | null;
  media_item?: MediaItem | null;
  stream_title?: string | null;
  stream_details?: AudioFormatSchema | null;
}

export type EnqueueModes = 
  "play"
  | "replace"
  | "next"
  | "replace_next"
  | "add"