import {
  baseMassQueueServiceSchema,
  queueItemPartialSchema,
} from "../utils.js";

export interface moveQueueItemDownServiceSchema
  extends baseMassQueueServiceSchema {
  service: "move_queue_item_down";
  service_data: queueItemPartialSchema;
}
