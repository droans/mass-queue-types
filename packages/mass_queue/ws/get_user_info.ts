export interface getUserInfoWSServiceSchema {
    type: "mass_queue/get_user_info";
    entity_id: string;
    username: string;
}


export interface getUserInfoWSResponseSchema {
    user_id: string;
    username: string;
    role: string;
    enabled: boolean;
    created_at: string;
    display_name?: string | null;
    avatar_url?: string | null;
    preferences: Record<string, unknown>;
    provider_filter: string[];
    player_filter: string[];
}
