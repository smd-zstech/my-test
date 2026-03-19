use serde::Serialize;

#[derive(Serialize)]
pub struct ZpaSegment {
    pub id: &'static str,
    pub name: &'static str,
    pub state: &'static str,
}

#[tauri::command]
pub fn list_zpa_segments() -> Vec<ZpaSegment> {
    vec![ZpaSegment {
        id: "zpa-1",
        name: "Finance Segment",
        state: "healthy",
    }]
}
