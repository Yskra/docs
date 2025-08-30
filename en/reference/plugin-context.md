---
outline: 3
---

# Plugin Context {#plugin-context}

## ctx.app {#app}

- Type `App<Element>`

The instance of the [Vue application](https://vuejs.org/guide/essentials/application.html#the-application-instance).

## ctx.router {#router}

- Type `Router`

The instance of [Vue Router](https://router.vuejs.org/guide/#creating-the-router-instance).

This is where you should use `ctx.router.addRoute()` to register new routes, instead of the `useRouter()` composable.

After the plugin is unmounted, all routes are automatically removed via `ctx.router.removeRoute()`.

## ctx.defineConfig() {#defineconfig}

- Type `<T extends Record<string, any>>(defaults: T) => Reactive<T>`

Defines the plugin configuration. Accepts an object to be used as default values. Returns a reactive object representing the difference between the default values and previously saved values.

```js
const config = defineConfig({
  foo: 'bar',
});

config.foo = 'baz'; // automatically saved
```

## ctx.defineSettings() {#definesettings}

- Type `(fields: RegisterSettingsField[] | Component) => void`

Creates a plugin settings page. Accepts an array of fields or a component.

::: details RegisterSettingsField

```ts
interface RegisterSettingsField {
    name: string | VNode;
    note?: string | VNode;
    ref: Ref;
    type: 'text' | 'number' | 'boolean' | 'select' | 'url' | 'password' |  Component;
    options?: { name: string; value: unknown }[];
}
```
:::

```js
const url = ref();

defineSettings([
  {
    name: 'API Endpoint',
    ref: url,
    type: 'url',
  },
]);
```

## ctx.defineBusService() {#definebusservice}

- Type `(name: string, service: BaseBusService) => (() => void)`

Registers a service in the [AppBus](../reference/modules/app-bus.md#appbus).

The service will be removed when the plugin is unmounted.

## ctx.defineLocales() {#defineLocales}

- Type `(locales: Record<string, Record<string, any>>) => void`

Globally adds i18n messages. Accepts an object where the key is a `LANGUAGE-REGION` code (e.g., `en-US`, `ru-RU`, etc.), and the value is an object containing the messages.

## ctx.useStyle() {#usestyle}

- Type `(css: MaybeRef<string>, options?: UseStyleTagOptions) => UseStyleTagReturn`

Reactive CSS injection. Use this function to inject your CSS instead of using `document.head.appendChild(<style/>)`.

* Wrapper around [useStyleTag](https://vueuse.org/core/useStyleTag/#usestyletag).
* Removes conflicting global CSS rules (e.g., `.text-sm` from Tailwind CSS).
* Calls `unload()` when the plugin is unmounted.

## ctx.injector {#injector}

- Type

```ts
interface Injector {
    post: (target: Target, methodName: string, patch: PatchPostInjection, debugId: string) => void;
    pre: (target: Target, methodName: string, patch: PatchPreInjection, debugId: string) => void;
    uninject: (injectionId: string) => void;
}
```

An instance of the [injector](./modules/injector.md).

Removes all injections when the plugin is unmounted.

```js
// Inject an additional global VNode
// into the render() function of the App.vue component

injector.post(ctx.app._component, 'render', (/** @type VNode */ result) => {
  if (Array.isArray(result.children)) {
    result.children.push(h(MyComponent));
  }
}, 'debug-id');
```
