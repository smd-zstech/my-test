use serde::Serialize;

#[derive(Serialize)]
pub struct AppStatus {
    pub shell: &'static str,
    pub note: &'static str,
}

#[tauri::command]
pub fn get_app_status() -> AppStatus {
    AppStatus {
        shell: "shared-shell-ready",
        note: "Workspace isolation is enforced in the frontend module graph.",
    }
}
