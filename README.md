# Zscaler + Okta Desktop Workspaces MVP

This repository contains an MVP Tauri desktop admin shell that hosts **two isolated administrator workspaces**:

- **Zscaler Workspace**
- **Okta Workspace**

## Non-negotiable architecture rule

This project is **not** a unified management console.

It intentionally avoids:
- a shared cross-product object model
- a global search page across Zscaler and Okta
- mixed detail screens
- mixed data tables showing both providers together

The app shell is shared, but the domain modules remain independent.

## Current MVP scope

### Shared App Shell
- Workspace switcher
- Theme toggle placeholder
- Shared notifications panel
- Shared job center panel
- Shared shell layout primitives
- Shared secure storage and SQLite abstraction placeholders

### Zscaler Workspace
- Dedicated workspace host
- Dedicated Zscaler product switcher
- **ZIA Console** placeholder view
- **ZPA Console** placeholder view
- **Client Connector Console** placeholder view
- Isolated navigation and product-context data
- OneAPI + Zidentity-oriented auth placeholder types
- Client Connector auth split noted as `CHECK REQUIRED`

### Okta Workspace
- Dedicated workspace host
- Isolated navigation, state, and placeholder detail views
- Scoped OAuth-oriented connection profile placeholder types

## Repository layout

```text
src/
  shell/
  shared/
  workspaces/
    zscaler/
      auth/
      zia/
      zpa/
      client-connector/
    okta/
src-tauri/
  src/
    commands/
      shell/
      zscaler/
      okta/
```

## Official-doc-driven boundaries kept visible in MVP

The following are left intentionally incomplete until validated against official docs:

- ZIA dry-run support
- ZIA/ZPA activation/apply nuance
- backup/export endpoint parity
- Client Connector parity under OneAPI + Zidentity
- secure storage wiring choice between OS secure storage and Stronghold plugin
- SQLite persistence wiring through the Tauri SQL plugin

## Local development

### Frontend
```bash
npm install
npm run dev
```

### Desktop app
```bash
npm install
npm run tauri dev
```

## Notes

- The frontend is structured to keep Zscaler and Okta separate.
- The backend commands are scaffolded by provider namespace only.
- The MVP ships placeholder data to demonstrate domain separation first.
