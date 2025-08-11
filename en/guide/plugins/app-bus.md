# Interacting with Other Plugins {#app-bus}

If you want to provide an API for other plugins, or if you want to call a method from another plugin or module - then you will be using this AppBus

## Call Method from Another Plugin {#call}

Get the instance of AppBus using `useAppBus()` from the `utils` module:
```js
const bus = Yskra.import('utils').useAppBus()
```

Calling a method:

```js
bus.call('serviceName:methodName', arg1, arg2);
```

___
For more details later you can read in the [Guide. AppBus](../app-bus.md)
