# First Plugin {#first-plugin}

## Idea {#idea}

The first thing to do when creating a plugin is to understand what exactly you are trying to achieve.

Knowing what you want from the plugin will also allow you to reach out to our developer community and ask for help. It's much easier to help someone with a specific task or final goal than someone who "just wants to make a plugin".

Also consider contributing to an existing plugin if there is already a plugin with similar functionality.

## Simple Example {#simple-example}

A plugin is a JavaScript file that exports a `default` function, and when mounted, it receives the plugin context.

::: tip Plugin Mounting

Mounting - when after loading the module, the function is executed. A plugin as a separate module will be loaded only once, but mounting may not occur, or it may occur multiple times.
For example, if the user disables and then re-enables the plugin.
:::

```js :line-numbers
/**
 * @name       MyPlugin
 * @id         dev.developer.MyPlugin
 * @version    1.0.0
 * @apiVersion 0
 * @author     developer
 * @source     null
 */

export default function plugin(ctx) {
  console.log('Hello from plugin!')
  
  return () => {
    console.log('Bye from plugin!')
  }
}
```

---

1. The first step in every plugin is the plugin manifest. All fields of the manifest can be seen in [Reference. Plugin - Manifest](../../reference/plugin-manifest.md)

2. The context (`ctx`) can also be found in [Reference. Plugin - Context](../../reference/plugin-context.md)

3. It's not required, but a plugin may return a function that will be called when unmounting.
   - If you changed something via the application API - undo this here
   - All functions from the plugin context have an undoing effect that will run on unmount

## Load Plugin {#load-plugin}

To load your plugin, use the `plugins` directory in the root of the project

```console
yskra // [!code focus]
├── index.html
├── node_modules
├── plugins // [!code focus]
│   └── myPlugin.js // [!code focus]
├── // ...
└── src
```

As soon as you edit or create a file, the page will automatically reload and you can see your plugin on the page <ExternalLink href="http://localhost:8930/settings/plugins" />
