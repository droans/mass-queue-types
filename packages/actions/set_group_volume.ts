import { baseMassQueueServiceSchema } from "../utils.js";

export interface setGroupVolumePartialSchema {
  entity: string;
  volume_level: number;
}

export interface setGroupVolumeServiceSchema
  extends baseMassQueueServiceSchema {
  service: "set_group_volume";
  service_data: setGroupVolumePartialSchema;
}
