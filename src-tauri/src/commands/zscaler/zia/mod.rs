use serde::Serialize;

#[derive(Serialize)]
pub struct ZiaPolicy {
    pub id: &'static str,
    pub name: &'static str,
    pub status: &'static str,
}

#[tauri::command]
pub fn list_zia_policies() -> Vec<ZiaPolicy> {
    vec![ZiaPolicy {
        id: "zia-1",
        name: "Internet Access Policy",
        status: "draft-review",
    }]
}
