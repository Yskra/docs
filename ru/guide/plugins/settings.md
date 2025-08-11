# Настройки плагина {#settings}

В целях безопасности из `window` удалены некоторые API, включая `window.loalStorage` - который позволяет сохранять и читать данные в локальном хранилище.
Вся работа с хранилищем замкнута в модулях приложения.

Однако плагинам доступен более удобный способ для сохранения своей конфигурации.

> API удалены при сборке в продакшн, в режиме разработки они остаются для корректной работы инструментов и горячей перезагрузки.


## defineConfig {#defineConfig}

Контекст плагина предоставляет метод `defineConfig`, который позволяет создать реактивную конфигурацию для плагина.

На вход принимает объект с настройками, которые будут использоваться как значения по умолчанию.

```js
export default function plugin({ defineConfig }) {
  const config = defineConfig({
    foo: 'bar',
  });

  config.foo = 'baz'; // будет автоматически сохранено в хранилище
}
```

При следующей загрузке плагина сохраненная конфигурация будет сравнена с дефолтной и `defineConfig` вернет разницу.

```js
export default function plugin({ defineConfig }) {
  const config = defineConfig({
    foo: 'bar',
  });

  config.foo // 'baz' // [!code focus]
}
```
___

::: tip Инструмента разработчика

Просмотреть конфигурацию всех установленных плагинов можно используя инструменты разработчика приложения
![скриншот инструменты разработчика](/pluginManagerDevtools.png)
:::

### Использование pinia {#store}

Вы так же можете отправить конфигурацию вашего плагина в pinia, чтобы у компонентов был доступ к ней.

::: warning Внимание

Однако тут стоит быть осторожным, поскольку pinia состояние всех хранилищ хранит фактически глобально, если вы хотите скрыть config, не делаете переменную частью состояния

:::

```js
// store.js
const config = ref(); // замыкаем переменную в модуле

export const usePluginStore = defineStore('myPlugin.main', () => {
  const data = ref();
  
  return {
    data,
    
    setConfig: (value) => {
      config.value = value;
    },
  }
  
  // можете обращаться внутри хранилища к config.value, 
  // делать запросы к внешнему API и возращать только функции и их результат
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

## Страница настроек {#settings-page}

Вы так же можете создать страницу настроек плагина используя контекст плагина

```js
const url = ref();

defineSettings([
  {
    name: 'Конечная точка API',
    ref: url,
    type: 'url',
  },
  {
    name: 'Токен',
    note: 'Собственный токен',
    
    // или если мы хотим взять поле из нашего кофига
    ref: toRef(config, 'token'),
    type: 'text',
  },
  {
    name: 'Язык',
    note: 'Запрос данных по языку. Заголовок, описание и тд.',
    ref: toRef(config, 'language'),
    type: 'select',
    options: [
      { name: 'По умолчанию', value: '' },
      { name: 'Русский', value: 'ru-RU' },
      { name: 'English', value: 'en-US' },
    ],
  },
]);
```

Будет выглядеть так:
![страница настоек](/settingsPageRenderRu.png)

Все типы полей можно посмотреть в [Справочнике. Контекст плагина - ctx.defineSettings](../../reference/plugin-context.md#definesettings)

___
Вы так же можете передать произвольный компонент, если хотите создать свою страницу настроек

```js
import Settings from './Settings.vue';

export default function plugin({ defineSettings }) {
  defineSettings(Settings);

   // обычно вы захотите передать какие-то реактвные данные
  const status = ref(0);

  defineSettings(h(() => h(Settings, { status: status.value })));
}
```

