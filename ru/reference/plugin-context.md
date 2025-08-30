# Контекст плагина {#plugin-context}


## ctx.app {#app}

- Тип `App<Element>`

Экземпляр [Vue приложения](https://ru.vuejs.org/guide/essentials/application.html#the-application-instance)


## ctx.router {#router}

- Тип `Router`

Экземпляр [Vue Router](https://vue-router-ru.netlify.app/guide/#creating-the-router-instance)

Именно тут вы должны использовать ctx.router.[addRoute](https://vue-router-ru.netlify.app/guide/advanced/dynamic-routing.html#adding-routes) для регистрации новых маршрутов, вместо useRouter() хука.

После размонтирования плагина автоматически удаляет все маршруты через `ctx.router.removeRoute()`


## ctx.defineConfig() {#defineconfig}

- Тип `<T extends Record<string, any>>(defaults: T) => Reactive<T>`

Определение конфигурации плагина, на вход получает объект, который будет использоваться для значений по умолчанию. Вернет реактивную разницу между значениями по умолчанию и ранее сохраненными значениями.

```js
const config = defineConfig({
  foo: 'bar',
});

config.foo = 'baz'; // автоматически сохраняется
```

## ctx.defineSettings() {#definesettings}

- Тип `(fields: RegisterSettingsField[] | Component) => void`

Создать станицу настроек плагина, получает массив полей или компонент

::: details RegisterSettingsField

```ts
interface RegisterSettingsField {
    name: string | VNode;
    note?: string | VNode;
    ref: Ref;
    type: 'text' | 'number' | 'boolean' | 'select' | 'url' | 'password' | Component;
    options?: { name: string; value: unknown }[];
}
```
:::

```js
const url = ref();

defineSettings([
  {
    name: 'Конечная точка API',
    ref: url,
    type: 'url',
  },
]);
```

## ctx.defineBusService() {#definebusservice}

- Тип `(name: string, service: BaseBusService) => (() => void)`

Регистрирует сервис в [AppBus](../reference/modules/app-bus.md#appbus)

Удалит сервис при размонтировании плагина

## ctx.defineLocales() {#defineLocales}

- Тип `(locales: Record<string, Record<string, any>>) => void`

Добавить глобально сообщения i18n. Получает объект, где поле `ЯЗЫК-РЕГИОН` (например `en-US`, `ru-RU` и тд.), а значение - объект с сообщениями

## ctx.useStyle() {#usestyle}

- Тип `(css: MaybeRef<string>, options?: UseStyleTagOptions) => UseStyleTagReturn`

Реактивное внедрение стилей. Используйте эту функцию для внедрения вашего CSS, вместо использования `document.head.appendChild(<style/>)`

  * Обертка вокруг [useStyleTag](https://vueuse.org/core/useStyleTag/#usestyletag)
  * Удалит конфликтующие глобальные CSS правила (например `.text-sm` из tailwindcss.)
  * Вызывает `unload()` при размонтировании плагина

## ctx.injector {#injector}

- Тип 

```ts
interface Injector {
    post: (target: Target, methodName: string, patch: PatchPostInjection, debugId: string) => void;
    pre: (target: Target, methodName: string, patch: PatchPreInjection, debugId: string) => void;
    uninject: (injectionId: string) => void;
}
```

Экземпляр [инжектора](./modules/injector.md)

Удаляет все инъекции при размонтировании плагина.


```js
// Внедрение дополнительного глобального VNode 
// в функцию render() компонента App.vue

injector.post(ctx.app._component, 'render', (/** @type VNode */ result) => {
  if (Array.isArray(result.children)) {
    result.children.push(h(MyComponent));
  }
}, 'debug-id');
```
