import {
  baseMassQueueServiceSchema,
  queueItemPartialSchema,
} from "../utils.js";

export interface moveQueueItemUpServiceSchema
  extends baseMassQueueServiceSchema {
  service: "move_queue_item_up";
  service_data: queueItemPartialSchema;
}
