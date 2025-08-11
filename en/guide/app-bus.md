# AppBus {#appbus}

The core of communication between modules and plugins.

## Registering Your Service {#registerservice}

To use AppBus, you need to request an instance of AppBus and use the `bus.registerService()` function. However, it's better to directly use [`ctx.defineBusService()`](../reference/plugin-context.md#definebusservice)

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

// The service name can be any string, 
// but to make it easier to identify the service, it's recommended to add your plugin name.
const unregister = bus.registerService('pluginName.myService', {
  hello: { // Method name
    type: 'method', // Method type, can be method, signal or property
    value: () => 'Hello from plugin!', // Value of the method
  },
  hey: () => 'Hello from plugin!', // Short syntax for registering a method

  // Add a property
  importantNumber: {
    type: 'property',
    value: 42,
  },
});

unregister(); // Remove the service
```

## Call Service Method {#callmethod}

To call a service method, you need to request an instance of AppBus and call the service method using `bus.call()`

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('myService:method', arg1, arg2);
```

All fields in AppBus can be found in the [reference](../reference/modules/app-bus.md#appbus)

::: tip Developer Tools

You can view all registered services using the application's developer tools.
![Developer Tools Screenshot](/appBusDevtools.png)
:::
