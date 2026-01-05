import {
  baseMassQueueServiceSchema,
  queueItemServiceData,
} from "../utils.js";

export interface moveQueueItemDownServiceSchema
  extends baseMassQueueServiceSchema {
  service: "move_queue_item_down";
  service_data: queueItemServiceData;
}
