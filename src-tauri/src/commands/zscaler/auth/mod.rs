use serde::Serialize;

#[derive(Serialize)]
pub struct ZscalerAuthStatus {
    pub auth_mode: &'static str,
    pub note: &'static str,
}

#[tauri::command]
pub fn get_zscaler_auth_status() -> ZscalerAuthStatus {
    ZscalerAuthStatus {
        auth_mode: "oneapi_zidentity",
        note: "Client Connector parity still requires official endpoint validation.",
    }
}
