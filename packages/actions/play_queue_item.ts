import {
  baseMassQueueServiceSchema,
  queueItemPartialSchema
} from "../utils.js";

export interface playQueueItemServiceSchema extends baseMassQueueServiceSchema {
  service: "play_queue_item",
  service_data: queueItemPartialSchema,
}
