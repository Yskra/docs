# Vue Components {#components}

For creating new parts of the interface, Vue components are used.

First, we need to get the Vue module - we can load it through the global function: `Yskra.import`

## Example Component {#example}

Options API:
```js
const { defineComponent } = Yskra.import('vue');

const MyComponent = defineComponent({
  name: 'MyComponent',
  template: '<div>Hello from MyComponent!</div>',
});
```

But sometimes we will use the Composition API. Then, as the first argument, we pass the `setup` hook that will return the render function.

```js
const { defineComponent, h } = Yskra.import('vue');

const MyComponent = defineComponent((props) => {
  return () => h('div', 'Hello from MyComponent!');
})
```

Let's now plug this component somewhere, for example on a new route path.

```js
/**
 * @name       MyPlugin
 * @id         dev.developer.MyPlugin
 * @version    1.0.0
 * @apiVersion 0
 * @author     developer
 * @license    UNLICENSED
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

::: tip Note

We used destructuring to immediately take `router` from the context
:::

Now you can go to <ExternalLink href="http://localhost:8930/test"/> and see our component.


## Rendering in VNode {#vnode}

Sometimes functions will require a virtual DOM node `VNode` as a parameter.

We can render the component using the `vue.h()` function
```js
const { h } = Yskra.import('vue');

h(MyComponent);
```

If we want to pass props:
```js
const props = { foo: 'bar' };
h(MyComponent, props);
```

However, if we pass props in this way to our component, the props will lose their reactivity, so we will be passing our component with props as a render function:
```js
const props = reactive({ foo: 'bar' });

h(() => h(MyComponent, props));
```

See also: [Vue Guide. Creating VNodes](https://vuejs.org/guide/extras/render-function.html#creating-vnodes)
___

If we want to draw something more complex than a single `<div/>` or use styles and this in the end will be difficult to maintain,
we will be using Vue SFC, for which we need a bundler. This is discussed in the next chapter
```
