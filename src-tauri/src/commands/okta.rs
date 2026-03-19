use serde::Serialize;

#[derive(Serialize)]
pub struct OktaStatus {
    pub workspace: &'static str,
    pub auth_mode: &'static str,
}

#[tauri::command]
pub fn list_okta_status() -> OktaStatus {
    OktaStatus {
        workspace: "okta",
        auth_mode: "oauth_service_app",
    }
}
