export interface getInfoWSServiceSchema {
  type: "mass_queue/get_info";
  entity_id: string;
}

export interface getInfoWSResponseSchema {
  available: boolean;
  can_group_with: string[];
  connection: {
    configuration_url: string;
    url: string;
  };
  entries: {
    music_assistant: string;
    mass_queue: string;
  };
  features: string[];
  manufacturer: string;
  model: string;
  name: string;
  player_id: string;
  provider: string;
  queue_id: string;
  server: {
    connection: {
      url: string;
      websocket: string;
    };
  };
  synced_to: string | null;
  type: string;
}
