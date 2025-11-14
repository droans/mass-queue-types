import { baseMassQueueServiceWithResponseSchema } from "../utils.js";

export interface recommendationItem {
  item_id: string;
  name: string;
  sort_name: string;
  uri: string;
  media_type: string;
  image: string;
}

export type recommendationItems = recommendationItem[];

export interface recommendationSection {
  item_id: string;
  provider: string;
  sort_name: string;
  name: string;
  uri: string;
  icon: string;
  image: string | null;
  items: recommendationItems;
}

export interface getRecommendationsPartialServiceResponse {
  response: recommendationSection[];
}

export interface getRecommendationsServiceResponse {
  response: getRecommendationsPartialServiceResponse;
}

export interface getRecommendationsPartialSchema {
  entity: string;
}

export interface getRecommendationsServiceSchema
  extends baseMassQueueServiceWithResponseSchema {
  service: "get_recommendations";
  service_data: getRecommendationsPartialSchema;
}
