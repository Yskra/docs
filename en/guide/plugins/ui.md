# User Interface {#ui}

To create an interface or interact with it, you can use the methods and components provided by the plugin [UI Kit](../../reference/builtin-plugins/ui-kit.md).

### Methods {#methods}

For example, to display a confirmation dialog with OK and Cancel buttons, you can use the `AppBus` method `ui.dialog:confirm`.

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('ui.dialog:confirm', 'Are you sure?').onConfirm(async () => {
  const confirm = bus.call('ui.dialog:confirm', {text: 'Are you rly sure?', open: false});
  
  const { isCanceled } = await confirm.reveal();
  
  if (!isCanceled) {
    console.log('Of course');
  }
});
```

Alternatively, to display an independent modal window, you can pass a `VNode` as the body.

```js
const { h } = Yskra.import('vue');
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('ui.dialog:modal', {
  title: 'Hello world!',
  body: h('span', 'Text'),
});
```

### Components

Components can be used directly in templates without prior import.

```vue
<template>
  <BaseBadge type="success">Success!</BaseBadge>
</template>
```

In render functions, you need to load the component using [`vue.resolveComponent`](https://vuejs.org/api/render-function.html#resolvecomponent).

___

Navigation can be configured using directives `v-focus-section` and `v-focus`.

```vue
<template>
  <div v-focus-section>
    <div v-focus>Focus</div>
    <div v-focus>Focus 2</div>
    
    <!-- Components from UI Kit already support focus -->
    <BaseButton type="primary">Button</BaseButton>
  </div>
</template>
```
