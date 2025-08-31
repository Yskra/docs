# Изменение компонентов {#component-inject}

После прочтения предыдущей главы, вероятно вы задаетесь вопросом, как можно получить модули для патча компонента.
К счастью, в глобальной переменной Yskra есть регистр всех объявленных компонентов.


## Пример {#example}

```js
// получить компонент сайдбара на главной странице
const TheRootSidebar = Yskra.componentRegister.get('TheRootSidebar');
```

## Работа с VNodes {#vnodes}

Дальше мы захотим сделать, что-то типа этого:

```js
const TheRootSidebar = Yskra.componentRegister.get('TheRootSidebar');

ctx.injector.post(TheRootSidebar, 'render', (/** @type VNode */ result) => {
  result // - содержит кучу VNode
});
```

Хорошо, если компонент простой, и мы можем просто замерить какую-то часть типа:

```js
result.children[0] = h('div', 'Hello world!');
```

Но иногда Vue может не заметить даже это изменение, компонент может измениться структурно и эффективность патча стремится к нулю.

К счастию, мы можем упростить часть работы с помощью модуля `Yskra.import('vnode-utils')` который использует
[vue-vnode-utils](https://skirtles-code.github.io/vue-vnode-utils/), полную документацию найдете на странице пакета.

Простой пример:
```js
const TheRootSidebar = Yskra.componentRegister.get('TheRootSidebar');
const { replaceChildren } = Yskra.import('vnode-utils');

injector.post(TheRootSidebar, 'render', (/** @type VNode */ result) => {
  if (Array.isArray(result.children)) { // улучить типизацию
    const newChildren = replaceChildren(result.children, (child) => {
      return [h('div', 'Hello world!'), child];
    });

    return h(result, newChildren);
  }

  return result;
});
```

## Работа в рантайме {#runtime}

Во режиме разработки плагин для отрисовки Vnode берет из `MODULE.render()`. Но после сборки компонентов логика немного меняется и уже используется `MODULE.setup()` который фактически возвращает `render()`.

Можете использовать утилиту `Yskra.import('utils').patchComponent`, который будет автоматически проверять режим работы и патчить нужный метод.

Простой пример на примере выше:
```js
const { replaceChildren } = Yskra.import('vnode-utils');
const { patchComponent } = Yskra.import('utils');

patchComponent(injector, 'TheRootSidebar', (result) => {
  if (Array.isArray(result.children)) {
    const newChildren = replaceChildren(result.children, (child) => {
      return [h('div', 'Hello world!'), child];
    });

    return h(result, newChildren);
  }

  return result;
});
```
