# AppBus {#appbus}

Основа общения между модулями и плагинами.

## Регистрация своего сервиса {#registerservice}

Для использования AppBus вам нужно запросить экземпляр AppBus и использовать функцию `bus.registerService()`, но лучше использовать сразу [`ctx.defineBusService()`](../reference/plugin-context.md#definebusservice)

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

// имя сервиса может быть любой строкой, 
// но чтобы было проще индефицировать сервис рекомендуется добавить имя вашего плагина
const unregister = bus.registerService('pluginName.myService', {
  hello: { // имя нашего метода
    type: 'method', // тип метода, может быть method, signal или property
    value: () => 'Hello from plugin!', // значение метода
  },
  hey: () => 'Hello from plugin!', // короткий синтаксис регистрации метода

  // добавить свойство
  importantNumber: {
    type: 'property',
    value: 42,
  },
});

unregister(); // Удалить сервис
```

## Вызвать метод сервиса {#callmethod}

Чтобы вызвать метод сервиса, вам нужно запросить экземпляр AppBus и вызвать метод сервиса с помощью `bus.call()`

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('myService:method', arg1, arg2);
```

Все поля AppBus можно посмотреть в [справочнике](../reference/modules/app-bus.md#appbus)

::: tip Инструмента разработчика

Просмотреть все зарегистрированные сервисы можно используя инструменты разработчика приложения
![скриншот инструменты разработчика](/appBusDevtools.png)
:::
