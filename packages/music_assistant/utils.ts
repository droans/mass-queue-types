export interface baseMusicAssistantServiceSchema {
  type: "call_service";
  domain: "music_assistant";
  service: string;
}
export interface baseMusicAssistantServiceWithResponseSchema
  extends baseMusicAssistantServiceSchema {
  return_response: true;
}

export interface baseMusicAssistantServiceWithTargetSchema
  extends baseMusicAssistantServiceSchema {
    target: {
      entity_id?: string | string[];
      device_id?: string | string[];
      floor_id?: string | string[];
    }
}

export interface baseMusicAssistantServiceWithTargetAndResponseSchema
  extends baseMusicAssistantServiceWithTargetSchema {
    return_response: true
  }