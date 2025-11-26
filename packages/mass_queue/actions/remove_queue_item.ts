import {
  baseMassQueueServiceSchema,
  queueItemPartialSchema,
} from "../utils.js";

export interface removeServiceSchema extends baseMassQueueServiceSchema {
  service: "remove_queue_item";
  service_data: queueItemPartialSchema;
}
