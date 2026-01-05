import { baseMusicAssistantServiceWithTargetSchema } from "../utils.js";

export interface transferQueueServiceData {
  source_player?: string;
  auto_play?: string;
}

export interface transferQueueServiceSchema
  extends baseMusicAssistantServiceWithTargetSchema {
  service: "transfer_queue"
  service_data: transferQueueServiceData  
}