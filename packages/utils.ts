export interface baseMassQueueServiceSchema {
  type: "call_service";
  domain: "mass_queue";
  service: string;
}

export interface baseMassQueueServiceWithResponseSchema
  extends baseMassQueueServiceSchema {
  return_response: true;
}

export interface queueItemPartialSchema {
  entity: string;
  queue_item_id: string;
}
