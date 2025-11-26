import { baseMassQueueServiceWithResponseSchema } from "../utils.js";

export interface queueItem {
  media_title: string;
  media_album_name: string;
  media_artist: string;
  media_content_id: string;
  playing: boolean;
  queue_item_id: string;
  media_image: string;
  local_image_encoded?: string;
  show_action_buttons: boolean;
  show_artist_name: boolean;
  show_move_up_next: boolean;
  favorite: boolean;
}

export type queueItems = queueItem[];

type getQueueItemsPartialResponse = Record<string, queueItems>;

export interface getQueueItemsServiceResponse {
  response: getQueueItemsPartialResponse;
}

export interface getQueueItemsPartialSchema {
  entity: string;
  limit_before?: number;
  limit_after?: number;
  limt?: number;
  offset?: number;
}

export interface getQueueItemsServiceSchema
  extends baseMassQueueServiceWithResponseSchema {
  service: "get_queue_items";
  service_data: getQueueItemsPartialSchema;
}
