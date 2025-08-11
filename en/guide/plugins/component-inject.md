# Component Injection {#component-inject}

After reading the previous chapter, you may wonder how to get modules for patching a component.
Fortunately, in the global variable Yskra there is a register of all declared components.


## Example {#example}

```js
// Get the sidebar component on the main page
const TheRootSidebar = Yskra.componentRegister.get('TheRootSidebar');
```

## Working with VNodes {#vnodes}

Next, we want to do something like this:

```js
const TheRootSidebar = Yskra.componentRegister.get('TheRootSidebar');

ctx.injector.post(TheRootSidebar, 'render', (/** @type VNode */ result) => {
  result // - contains a lot of VNodes
});
```

Good if the component is simple, and we can just replace some part:

```js
result.children[0] = h('div', 'Hello world!');
```

But sometimes Vue may not notice this change even then, the component may structurally change and the efficiency of the patch approaches zero.

Fortunately, we can simplify part of the work by using the `Yskra.import('vnode-utils')` module which uses
[vue-vnode-utils](https://skirtles-code.github.io/vue-vnode-utils/), full documentation will be found on the package page.

Simple example:
```js
injector.post(TheRootSidebar, 'render', (/** @type VNode */ result) => {
  if (Array.isArray(result.children)) { // improve type safety
    const newChildren = replaceChildren(result.children, (child) => {
      return [h('div', 'Hello world!'), child];
    });

    return h(result, newChildren);
  }

  return result;
});
```
