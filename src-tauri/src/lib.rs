mod commands;

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::shell::get_app_status,
            commands::zscaler::auth::get_zscaler_auth_status,
            commands::zscaler::zia::list_zia_policies,
            commands::zscaler::zpa::list_zpa_segments,
            commands::zscaler::client_connector::list_client_connector_profiles,
            commands::okta::list_okta_status
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
