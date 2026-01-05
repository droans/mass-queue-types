import {
  baseMassQueueServiceSchema,
  queueItemServiceData,
} from "../utils.js";

export interface moveQueueItemNextServiceSchema
  extends baseMassQueueServiceSchema {
  service: "move_queue_item_next";
  service_data: queueItemServiceData;
}
