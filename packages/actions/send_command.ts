import { baseMassQueueServiceSchema } from "../utils.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type dataSchema = Record<string, any>;

export interface sendCommandPartialSchema {
  command: string;
  config_entry_id: string;
  data: dataSchema | null | undefined;
}

export interface sendCommandServiceSchema extends baseMassQueueServiceSchema {
  service: "send_command";
  service_data: sendCommandPartialSchema;
}
