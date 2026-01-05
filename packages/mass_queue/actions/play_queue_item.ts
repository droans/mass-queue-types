import {
  baseMassQueueServiceSchema,
  queueItemServiceData,
} from "../utils.js";

export interface playQueueItemServiceSchema extends baseMassQueueServiceSchema {
  service: "play_queue_item";
  service_data: queueItemServiceData;
}
