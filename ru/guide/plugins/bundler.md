# Сборка плагина {#bundle}

### Что это такое {#what-is}
В экосистеме JavaScript сборка — это метод объединения множества файлов в один большой файл с сохранением импорта и экспорта, как если бы все файлы были отдельными. Это также форма транспиляции.

Сборка также открывает возможности для других типов транспиляции, таких, как [TypeScript](https://www.typescriptlang.org/) или [Vue JSX](https://github.com/vuejs/babel-plugin-jsx), 
так же оно позволяет вам структурировать ваш плагин

Вы можете настроить любой другой сборщик самостоятельно с любым другими инструментами для JavaScript, тот же TypeScript или Sass/PostCSS или TailwindCSS для стилей и так далее.

### Шаблон плагина {#template}
Дальше мы будем использовать минимальный [шаблон](https://github.com/yskra/plugins-template) на [Vite](https://vite.dev) с несколькими плагинами.

Ожидается, что директория с вашими плагинами будет находиться на одном уровне с проектом Yskra.
Иначе отредактируйте `build.outDir` в `vite.config.js`.

```console
.
├── yskra
│  ├── index.html
│  ├── plugins
│  ├── // ...
│  └── src
└── plugins
   ├── MyPlugin
   ├── node_modules
   ├── // ...
   └── vite.config.js
```

Не забудьте установить зависимости внутри папки `plugins`

```zsh
pnpm install
```

## Команды {#commands}

Чтобы собрать все плагины
```zsh
pnpm run build
```

Чтобы собрать только **MyPlugin** и пересобирать его при изменении
```zsh
pnpm run dev:MyPlugin
```

## Сборка плагина {#build-plugin}

Чтобы собрать плагин выполните команду `pnpm run build:MyPlugin`

Плагин сразу будет скопирован в папку `yskra/plugins` в двух версиях: с использованием ESM (`*.js`) и с использованием SystemJS (`*.system.js`), последний используется для работы в браузерах без ESM поддержки соответственно.
Это преимущество использования сборщика, вы можете писать свой код на удобном современном синтаксисе JavaScript, а сборщик позаботится об остальном!

## Vite плагины {#vite-plugins}

Не считая самого Vue плагина, в `vite.config.js` можно увидеть ещё несколько других плагинов:

### manifest.json {#manifest}

Как вы заметили, что в директории MyPlugin есть файл `manifest.json`.  Он при сборке конвертируется в JSDoc и добавляется к выходному файлу.
Благородя, чему можно отделить статическую информацию от вашего кода

Массив-подобные параметры можно записывать типа `"flags": ["flag1", "flag2"]`, а параметр `dependencies` можно записывать `"dependencies": {"dep1": "1.0.0"}`.

### virtual:styles {#styles}

Так же в `main.js` можно заметить `'virtual:styles'`. 
Модуль, который собирает все ваши стили и при сборке включая глобальные импорты `css`/`sccs` в `main.js` и `<style/>` в SFC.

Возвращает всё одной строкой, благородя, чему вы можете теперь передать её в [ctx.useStyle()](../../reference/plugin-context.md#usestyle):

```js
import './main.css'; // глобальный стиль
import 'virtual:uno.css'; // другой виртуальный модуль
import styles from 'virtual:styles';

export default function plugin({ useStyle }) {
  useStyle(styles);
}
```


### replace-imports {#replace-imports}

[rollup-plugin-replace-imports-with-vars](https://github.com/rart/rollup-plugin-replace-imports-with-vars) от Roy Art

Плагин, который позволяет заменять импорты на переменные.

Теперь мы можем вместо `Yskra.import('vue')` использовать обычный импорт и получить подсветку синтаксиса типизации:

```js
import { ref } from 'vue';
import { Intl } from 'utils'
```

Смотрите так же [Справочник. Глобальные переменные - доступные модули](../../reference/globals.md#available-modules)


## Библиотеки стилей {#styles-libs}

Для базовых компонентов интерфейса вы скорее всего захотите использовать встроенный [UI Kit](../../reference/builtin-plugins/ui-kit.md#components) и наверное вам этого даже хватит.

Однако если вы будете использовать что-то типа UnoCSS или TailwindCSS вы должны исключить из своих стилей **preflight** и другую глобальную стилизацию базовых тегов, 
так как это будет конфликтовать с UIKit:

::: code-group 
```js [uno.config.js]
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      preflight: false, // [!code ++]
    }),
  ],
});
```

```js [tailwind.config.js]
export default {
  corePlugins: { // [!code ++]
    preflight: false, // [!code ++]
  } // [!code ++]
}
```
:::
