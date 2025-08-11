# Plugin Settings {#settings}

For security reasons, some APIs have been removed from `window`, including `localStorage` - which allows saving and reading data in local storage.
All work with the storage is enclosed within application modules.

However, plugins are provided with a more convenient way to save their configuration.

> These APIs are removed during production builds, and they remain for correct tooling operation and hot reloading in development mode.

## defineConfig {#defineConfig}

The plugin context provides a method `defineConfig` that allows you to create a reactive configuration for the plugin.

It takes an object with settings, which will be used as default values.

```js
export default function plugin({ defineConfig }) {
  const config = defineConfig({
    foo: 'bar',
  });

  config.foo = 'baz'; // automatically saved in storage
}
```

Upon the next plugin load, the stored configuration is compared with the defaults, and `defineConfig` will return the differences.

```js
export default function plugin({ defineConfig }) {
  const config = defineConfig({
    foo: 'bar',
  });

  console.log(config.foo); // 'baz'
}
```

### Using Pinia {#store}

You can also send your plugin's configuration to pinia so that components have access to it.

::: warning Attention

However, be cautious here since pinia stores all state globally. If you want to hide the config, do not make the variable part of the state.

:::

```js
// store.js
const config = ref(); // enclose the variable in a module

export const usePluginStore = defineStore('myPlugin.main', () => {
  const data = ref();
  
  return {
    data,
    
    setConfig: (value) => {
      config.value = value;
    },
  }
  
  // you can access inside the store to config.value, make requests to external APIs 
  // and only return functions and their results
})
```

```js
// main.js
import { usePluginStore } from './store.js';

export default function plugin({ defineConfig }) {
  const store = usePluginStore();
  
  const config = defineConfig({
    foo: 'bar',
  });
  
  store.setConfig(config);
}
```

## Settings Page {#settings-page}

You can also create a settings page for your plugin using the plugin context:

```js
const url = ref();

defineSettings([
  {
    name: 'API Endpoint',
    ref: url,
    type: 'url',
  },
  {
    name: 'Token',
    note: 'Own token',
    
    // or if we want to take a field from our config
    ref: toRef(config, 'token'),
    type: 'text',
  },
  {
    name: 'Language',
    note: 'Request data by language. Headers, descriptions and so on.',
    ref: toRef(config, 'language'),
    type: 'select',
    options: [
      { name: 'Default', value: '' },
      { name: 'Russian', value: 'ru-RU' },
      { name: 'English', value: 'en-US' },
    ],
  },
]);
```

It will look like this:
![settings page](/settingsPageRenderEn.png)

You can see all field types in the [Reference. Plugin Context - ctx.defineSettings](../../reference/plugin-context.md#definesettings) guide.

---
You can also pass a custom component if you want to create your own settings page:

```js
import Settings from './Settings.vue';

export default function plugin({ defineSettings }) {
  defineSettings(Settings);

   // usually you want to pass some reactive data
  const status = ref(0);

  defineSettings(h(() => h(Settings, { status: status.value })));
}
```
