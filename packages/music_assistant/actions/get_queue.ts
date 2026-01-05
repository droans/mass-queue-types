import { QueueItemSchema } from "../types.js";
import { baseMusicAssistantServiceWithResponseSchema } from "../utils.js";

export interface getQueuePartialServiceResponse {
  queue_id: string;
  active: boolean;
  name: string;
  items: number;
  shuffle_enabled: boolean;
  repeat_mode: boolean;
  current_index: number | null;
  elapsed_time: number;
  current_item: QueueItemSchema;
  next_item: QueueItemSchema;

}
type getQueueServiceEntitiesResponse = Record<string, getQueuePartialServiceResponse>;

export interface getQueueServiceResponse {
  response: getQueueServiceEntitiesResponse;
}

export interface getQueueServiceData {
  entity_id: string;
}

export interface getQueueServiceSchema
  extends baseMusicAssistantServiceWithResponseSchema {
  service: "get_queue"
  service_data: getQueueServiceData
}