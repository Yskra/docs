# Plugin Bundling {#bundle}

### What is it? {#what-is}
In the JavaScript ecosystem, bundling refers to a method for combining multiple files into a single large file while preserving imports and exports as if all files were separate. This also serves as a form of transpilation.

Bundling also opens up possibilities for other types of transpilation, such as [TypeScript](https://www.typescriptlang.org/) or [Vue JSX](https://github.com/vuejs/babel-plugin-jsx), as well as allowing you to structure your plugin.

You can configure any other bundler with any other JavaScript tools, including TypeScript or Sass/PostCSS, TailwindCSS for styles, and more.

### Plugin Template {#template}
Moving forward, we'll use a minimal [template](https://github.com/Yskra-app/plugins-template) on [Vite](https://vite.dev) with several plugins.

It's expected that the directory containing your plugins will be at the same level as the Yskra project.
If not, edit `build.outDir` in `vite.config.js`.

```console
.
├── yskra
│  ├── index.html
│  ├── plugins
│  ├── // ...
│  └── src
└── plugins
   ├── MyPlugin
   ├── node_modules
   ├── // ...
   └── vite.config.js
```

Don't forget to install dependencies inside the `plugins` folder.

```zsh
pnpm install
```

## Commands {#commands}

To bundle all plugins:
```zsh
pnpm run build
```

To bundle only **MyPlugin** and rebuild it on change:
```zsh
pnpm run dev:MyPlugin
```

## Bundling a Plugin {#build-plugin}

To bundle a plugin, run the command `pnpm run build:MyPlugin`.

The plugin will immediately be copied to the `yskra/plugins` folder in two versions: using ESM (`*.js`) and using SystemJS (`*.system.js`). The latter is used for working in browsers without ESM support.

This advantage of using a bundler is that you can write your code in a convenient modern JavaScript syntax, and the bundler will take care of the rest!

## Vite Plugins {#vite-plugins}

Apart from the Vue plugin itself, several other plugins are visible in `vite.config.js`:

### manifest.json {#manifest}

As you noticed, there's a `manifest.json` file in the MyPlugin directory. This file is converted to JSDoc during bundling and added to the output file.

This allows static information to be separated from your code.

Array-like parameters can be written like `"flags": ["flag1", "flag2"]`, and the `dependencies` parameter can be written as `"dependencies": {"dep1": "1.0.0"}`.

### virtual:styles {#styles}

Also in `main.js`, you'll notice `'virtual:styles'`. This module collects all your styles, including global imports of `css`/`scss` into `main.js` and `<style/>` in SFC.

It returns everything as a single string, allowing you to now pass it to [ctx.useStyle()](../../reference/plugin-context.md#usestyle):

```js
import './main.css'; // Global style
import 'virtual:uno.css'; // Another virtual module
import styles from 'virtual:styles';

export default function plugin({ useStyle }) {
  useStyle(styles);
}
```

### replace-imports {#replace-imports}

[rollup-plugin-replace-imports-with-vars](https://github.com/rart/rollup-plugin-replace-imports-with-vars) by Roy Art

A plugin that allows replacing imports with variables.

Now we can use regular imports instead of `Yskra.import('vue')` and get syntax highlighting for type inference:

```js
import { ref } from 'vue';
import { Intl } from 'utils'
```

See also [Reference. Global Variables - Available Modules](../../reference/globals.md#available-modules)

## Style Libraries {#styles-libs}

For basic interface components, you'll probably want to use the built-in [UI Kit](../../reference/builtin-plugins/ui-kit.md#components), and this might be enough for your needs.

However, if you're using something like UnoCSS or TailwindCSS, you should exclude **preflight** and other global styling of base tags from your styles,
as it will conflict with the UIKit:

::: code-group
```js [uno.config.js]
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      preflight: false, // [!code ++]
    }),
  ],
});
```

```js [tailwind.config.js]
export default {
  corePlugins: { // [!code ++]
    preflight: false, // [!code ++]
  } // [!code ++]
}
```
:::
