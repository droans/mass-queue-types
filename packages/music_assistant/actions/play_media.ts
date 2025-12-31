import { EnqueueModes, MediaTypes } from "../types.js";
import { baseMusicAssistantServiceWithTargetSchema } from "../utils.js";

export interface playMediaPartialSchema {
  media_id: string;
  media_type?: MediaTypes;
  artist?: string;
  album?: string;
  enqueue?: EnqueueModes;
  radio_mode?: boolean;
}

export interface playMediaServiceSchema
  extends baseMusicAssistantServiceWithTargetSchema {
  service: "play_media"
  service_data: playMediaPartialSchema
}