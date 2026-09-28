# @paperclipai/adapter-claude-local

## Unreleased

### Patch Changes

- Persist the 2026-09-27 root/remote Claude CLI allowlist hotfix in the
  canonical source. The allowlist includes only the two Paperclip-managed MCP
  gateway namespaces (`mcp__Paperclip_connections__*` and
  `mcp__paperclip-assigned__*`); the global `mcp__*` pattern remains excluded.
- Keep the current-release runtime hotfix as the rollback backup until this
  source change is deployed. The next deployment must rebuild the adapter from
  this source and run the focused permission tests so a dist-only patch cannot
  regress silently.

## 0.3.1

### Patch Changes

- Stable release preparation for 0.3.1
- Updated dependencies
  - @paperclipai/adapter-utils@0.3.1

## 0.3.0

### Minor Changes

- Stable release preparation for 0.3.0

### Patch Changes

- Updated dependencies
  - @paperclipai/adapter-utils@0.3.0

## 0.2.7

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.7

## 0.2.6

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.6

## 0.2.5

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.5

## 0.2.4

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.4

## 0.2.3

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.3

## 0.2.2

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.2

## 0.2.1

### Patch Changes

- Version bump (patch)
- Updated dependencies
  - @paperclipai/adapter-utils@0.2.1
