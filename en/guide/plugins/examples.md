# Plugin examples {#examples}

Examples of working plugins for getting started with your own plugins.

## Built-in plugins {#builtin-plugins}

Built-in plugins can be found in `yskra/src/plugins`, or [github](https://github.com/Yskra/yskra/tree/master/src/plugins)

::: tip Note

Note that plugins skip the usual build, which you do with vite, because they are built with the application and the import paths will differ, because there is no need to rely on `Yskra.import()`

The same is true for the plugin manifest **source** is `null`, and is used as the entry point.

In the rest of the plugins, they work exactly the same as normal

:::

## Iframe plugin {#iframe-plugin}

Adds a custom player to WebPlayer for supporting third-party players through iframe

[Github](https://github.com/Yskra/iframe-player-plugin/tree/master/plugin)

## Xinos plugins {#xinos-plugins}

Xinos plugins [github](https://github.com/userXinos/yskra-plugins)
