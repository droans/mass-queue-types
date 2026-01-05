import { baseMusicAssistantServiceWithTargetSchema } from "../utils.js";

export interface playAnnouncementServiceData {
  url: string;
  use_pre_announce?: boolean;
}

export interface playAnnouncementServiceSchema
  extends baseMusicAssistantServiceWithTargetSchema {
  service: "play_announcement"
  service_data: playAnnouncementServiceData
}