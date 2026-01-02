import { AudioFormat } from "./audio-format.js";

export interface ProviderMapping {
  item_id: string;
  provider_domain: string;
  provider_instance: string;
  available: boolean;
  in_library: boolean | null;
  is_unique? : boolean | null;
  audio_format: AudioFormat;
  url: string | null;
  details: string | null;
}