import { MediaType } from "./media-type.js";
import { ProviderMapping } from "./provider-mapping.js";

export interface MediaItem extends MediaItemBase {
  provider_mappings: ProviderMapping[],
  metadata: MediaItemMetadata;
  favorite: boolean;
  position: number | null;
}

export interface Artist extends Omit<MediaItem, 'media_type'> {
  media_type: 'artist';
}
export interface Album extends Omit<MediaItem, 'media_type'> {
  media_type: 'album';
  year: number | null;
  album_type: AlbumType;
  artists: Artist[];
}
export interface Track extends Omit<MediaItem, 'media_type'> {
  media_type: 'track';
  duration: number | undefined;
  artists: Artist[];
  album: Album[];
  disc_number: number;
  track_number: number;
  image?: MediaItemImage | null;
}
export interface Playlist extends Omit<MediaItem, 'media_type'> {
  media_type: 'playlist';
  owner: string;
  is_editable: boolean;
}

export interface Radio extends Omit<MediaItem, 'media_type'> {
  media_type: 'radio';
  duration: number | null;
}
export interface Audiobook extends Omit<MediaItem, 'media_type'> {
  media_type: 'audiobook';
  publisher: string;
  authors: string[];
  narrators: string[];
  duration: number | null;
  fully_played: boolean | null;
  resume_position_ms: number | null;
}
export interface Podcast extends Omit<MediaItem, 'media_type'> {
  media_type: 'podcast';
  publisher: string;
  total_episodes: number | null;
}
export interface PodcastEpisode extends Omit<MediaItem, 'media_type'> {
  media_type: 'podcast_episode';
  fully_played: boolean | null;
  resume_position_ms: number | null;
  podcast: Podcast;
  duration: number;  
}

type externalIds = [string, string][];

interface MediaItemBase {
  item_id: string;
  provider: string;
  name: string;
  version: string;
  sort_name: string | null;
  uri: string | null;
  external_ids: externalIds;
  is_playable: boolean;
  translation_key: string | null;
  media_type: MediaType;
}

type MediaImageType = 
  "thumb"
  | "landscape"
  | "fanart"
  | "logo"
  | "clearart"
  | "banner"
  | "cutout"
  | "back"
  | "discart"
  | "other"

type AlbumType = 
  "album"
  | "single"
  | "live"
  | "soundtrack"
  | "compilation"
  | "ep"
  | "unknown"

interface MediaItemImage {
  type: MediaImageType;
  path: string;
  provider: string;
  remotely_accessible: boolean;
}

interface MediaItemLinkType {
  type: string;
  url: string;
}

interface MediaItemChapter {
  position: number;
  name: string;
  start: number;
  end: number | null;
}

interface MediaItemMetadata {
  description: string | null;
  review: string | null;
  explicit: boolean | null;
  images: MediaItemImage | null;
  grouping: string | null;
  genres: string[] | null;
  mood: string | null;
  style: string | null;
  copyright: string | null;
  lyrics: string | null;
  lrc_lyrics: string | null;
  label: string | null;
  links: MediaItemLinkType[] | null;
  performers: string[] | null;
  preview: string | null;
  popularity: number | null;
  release_date: string | null;
  languages: string[] | null;
  chapters: MediaItemChapter | null;
  last_refresh: number | null;
}
