import { baseMassQueueServiceSchema } from "../utils.js";

export interface unfavoriteCurrentItemPartialSchema {
  entity: string;
}

export interface unfavoriteCurrentItemServiceSchema
  extends baseMassQueueServiceSchema {
  service: "unfavorite_current_item";
  service_data: unfavoriteCurrentItemPartialSchema;
}
