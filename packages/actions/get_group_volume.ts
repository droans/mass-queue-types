import { baseMassQueueServiceWithResponseSchema } from "../utils.js";

export interface getGroupVolumePartialServiceResponse {
  volume_level: number;
}

export interface getGroupVolumeServiceResponse {
  response: getGroupVolumePartialSchema;
}

export interface getGroupVolumePartialSchema {
  entity: string;
}

export interface getGroupVolumeServiceSchema
  extends baseMassQueueServiceWithResponseSchema {
  service: "get_group_volume";
  service_data: getGroupVolumePartialSchema;
}
