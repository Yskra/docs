# AppBus {#appbus}

## appBus.registerService() {#registerservice}

- Тип `(name: string, service: BaseBusService) => (() => void)`

Зарегистрировать сервис в AppBus

Вернет функцию, которая удаляет сервис

::: details BaseBusService
```ts
interface BaseBusService {
  [name: string]: {
    type: 'method' | 'signal' | 'property';
    value?: (((...args: any[]) => unknown) | unknown);
  } | ((...args: any[]) => unknown); 
}
```
:::

```js
appBus.registerService('plaginName.serviseName', {
  hello: {
    type: 'method',
    value: () => 'Hello from AppBus service!',
  },
});
```

Смотрите так же [Руководство - AppBus. Регистрация своего сервиса](../../guide/app-bus.md#registerservice)


## appBus.call() {#call}

- Тип `(serviceMethodName: string, ...args: any[]) => any`

Вызов метода сервиса.

Смотрите так же [Руководство - AppBus. Вызвать метод сервиса](../../guide/app-bus.md#callmethod)



## appBus.emit() {#emit}

- Тип `(serviceSignalName: string, ...args: any[]) => void`

Послать сигнал сервиса.


## appBus.on() {#on}

- Тип `(serviceSignalName: string, callback: (...args: any[]) => void) => (() => void)`

Подписаться на сигнал сервиса.

Вернет функцию, которая удаляет подписку


## appBus.off() {#off}

- Тип `(serviceSignalName: string, listener: (...args: any[]) => void) => void`

Отписаться от сигнала сервиса


## appBus.set()

- Тип `(servicePropertyName: string) => any`

Установить свойство сервиса.


## appBus.get() {#get}

- Тип `(servicePropertyName: string) => any`

Прочитать свойство сервиса.
