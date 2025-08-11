# Vue компоненты {#components}

Для создания новых частей интерфейса используются Vue компоненты.

Для начала на нужно получить модуль Vue - мы можем его загрузить через глобальную функцию: `Yskra.import`

## Пример компонента {#example}

Options API: 
```js
const { defineComponent } = Yskra.import('vue');

const MyComponent = defineComponent({
  name: 'MyComponent',
  template: '<div>Hello from MyComponent!</div>',
});
```

Но иногда мы будем использовать Composition API. Тогда первым аргументом мы передаем `setup` хук, который вернет рендер функцию.

```js
const { defineComponent, h } = Yskra.import('vue');

const MyComponent = defineComponent((props) => {
  return () => h('div', 'Hello from MyComponent!');
})
```

Давайте теперь куда-нибудь запихаем этот компонент, например на новый путь роутера.

```js
/**
 * @name       MyPlugin
 * @id         dev.developer.MyPlugin
 * @version    1.0.0
 * @apiVersion 0
 * @author     developer
 * @source     null
 */

const { defineComponent, h } = Yskra.import('vue');

const MyComponent = defineComponent((props) => {
  return () => h('div', 'Hello from MyComponent!');
})

export default function plugin({ router }) {
  router.addRoute({
    name: 'MyComponentTest',
    path: 'test',
    component: MyComponent,
  });
}
```

::: tip Обратите внимание

Мы использовали деструктуризацию, чтобы сразу взять из контекста `router`
:::

Теперь вы можете перейти на http://localhost:8930/test и увидите наш компонент.


## Рендер в VNode {#vnode}

Иногда функции будут требовать узел виртуального DOM `VNode` в качестве параметра.

Мы можем сделать рендер компонента с помощью функции `vue.h()`
```js
const { h } = Yskra.import('vue');

h(MyComponent);
```

Если мы хотим передать пропсы:
```js
const props = { foo: 'bar' };
h(MyComponent, props);
```

Однако, если передадим в таком виде пропсы в наш компонент, пропсы потеряют свою реактивность, поэтому мы будем передавать наш компонент с пропсами как рендер функцию:
```js
const props = reactive({ foo: 'bar' });

h(() => h(MyComponent, props));
```

Смотрите так же: [Руководство Vue. Создание VNodes](https://ru.vuejs.org/guide/extras/render-function.html#creating-vnodes)
___

Если мы хотим отрисовать, что-то сложнее одного `<div/>` или использовать стили и это в конечном итоге будет сложно поддерживать, 
поэтому мы будем использовать Vue SFC, а для этого надо использовать сборщик (bundler). Об этом в следующей главе


