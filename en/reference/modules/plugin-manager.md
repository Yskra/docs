# PluginManager {#plugin-manager}

The core foundation of Yskra. Registers the `/settings/plugins` page for managing plugins and repositories.

Manages all plugin loading, including during application startup.  
Handles enabling and disabling plugins, and mounts or unmounts plugins according to their dependencies.  
Adds support for package requests via `Yskra.import` and `Yskra.package`.

Has no public methods.

See [Guide: Plugins](../../guide/plugins/first-plugin.md) for more information.
