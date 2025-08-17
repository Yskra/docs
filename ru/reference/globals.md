---
outline: 2
---
# Глобальные переменные

## window.Yskra.version

- Тип `string`

Версия приложения

## window.Yskra.platform

Подробнее смотрите [Модули. Platform](./modules/platform.md)

## window.Yskra.import()

- Тип `(module: string) => any`

Запросить глобальный модуль


### Доступные модули в приложении {#available-modules}
   - `vue` - [Vue](https://ru.vuejs.org/api/)
   - `router` - [Vue Router](https://vue-router-ru.netlify.app/api/)
   - `i18n` - [Vue i18n](https://vue-i18n.intlify.dev/api/general.html/)
   - `pinia` - [Pinia](https://pinia-ru.netlify.app/api/modules/pinia.html#%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
   - `vnode-utils` - [vue-vnode-utils](https://skirtles-code.github.io/vue-vnode-utils/)
   - `arrow-navigation` - Библиотека пространственной навигации для Vue 3
   - `utils` - Каталог src/utils Yskra

::: details Utils {#utils}
<!--@include: ./utils.md{3,}-->
:::


## window.Yskra.package()

- Тип 
```typescript
{ 
    getInfo: (name: string) => { module: any; version: string; author: string };
    list: string[]; 
}
```
