# AppBus {#appbus}

## appBus.registerService() {#registerservice}

- Type `(name: string, service: BaseBusService) => (() => void)`

Register a service in AppBus.

Returns a function that removes the service.

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
appBus.registerService('pluginName.serviceName', {
  hello: {
    type: 'method',
    value: () => 'Hello from AppBus service!',
  },
});
```

See also [Guide - AppBus. Registering Your Own Service](../../guide/app-bus.md#registerservice)

## appBus.call() {#call}

- Type `(serviceMethodName: string, ...args: any[]) => any`

Call a service method.

See also [Guide - AppBus. Calling a Service Method](../../guide/app-bus.md#callmethod)

## appBus.emit() {#emit}

- Type `(serviceSignalName: string, ...args: any[]) => void`

Emit a service signal.

## appBus.on() {#on}

- Type `(serviceSignalName: string, callback: (...args: any[]) => void) => (() => void)`

Subscribe to a service signal.

Returns a function that removes the subscription.

## appBus.off() {#off}

- Type `(serviceSignalName: string, listener: (...args: any[]) => void) => void`

Unsubscribe from a service signal.

## appBus.set() {#set}

- Type `(servicePropertyName: string, value: any) => void`

Set a service property.

## appBus.get() {#get}

- Type `(servicePropertyName: string) => any`

Get a service property.
