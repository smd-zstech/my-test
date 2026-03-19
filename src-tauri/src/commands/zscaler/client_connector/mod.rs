use serde::Serialize;

#[derive(Serialize)]
pub struct ClientConnectorProfile {
    pub id: &'static str,
    pub name: &'static str,
    pub mode: &'static str,
}

#[tauri::command]
pub fn list_client_connector_profiles() -> Vec<ClientConnectorProfile> {
    vec![ClientConnectorProfile {
        id: "cc-1",
        name: "Windows App Profile",
        mode: "portal_public_api",
    }]
}
