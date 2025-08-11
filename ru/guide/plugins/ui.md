# Пользовательский интерфейс {#ui}

Для создания интерфейса или взаимодействия с ним вы можете использовать методы и компоненты плагина [UI Kit](../../reference/builtin-plugins/ui-kit.md).


### Методы {#methods}

Например, чтобы отобразить диалог подтверждения с кнопками OK и Отмена вы можете использовать метод AppBus `ui.dialog:confirm`

```js
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('ui.dialog:confirm', 'Вы уверены?').onConfirm(async () => {
  const confirm = bus.call('ui.dialog:confirm', {text: 'Вы точно уверены?', open: false});
  
  const { isCanceled } = await confirm.reveal();
  
  if (!isCanceled) {
    console.log('Точно');
  }
});
```

Или, чтобы отобразить самостоятельное модальное окно, надо передать `VNode` в качестве body

```js
const { h } = Yskra.import('vue');
const { useAppBus } = Yskra.import('utils');
const bus = useAppBus();

bus.call('ui.dialog:modal', {
  title: 'Hello world!',
  body: h('span', 'Text'),
});
```


### Компоненты

Компоненты вы можете использовать напрямую в шаблонах без предварительного импорта

```vue
<template>
  <BaseBadge type="success">Успех!</BaseBadge>
<template>
```

В рендер функциях вам надо загрузить компонент с помощью [`vue.resolveComponent`](https://ru.vuejs.org/api/render-function.html#resolvecomponent)

___

Настроить навигацию можно через директивы `v-focus-section` и `v-focus`.

```vue
<template>
  <div v-focus-section>
    <div v-focus>Фокус</div>
    <div v-focus>Фокус 2</div>
    
    <!-- Компоненты из UIKit уже поддерживают фокус -->
    <BaseButton type="primary">Кнопка</BaseButton>
  </div>
<template>
```
