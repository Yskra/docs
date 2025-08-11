---
outline: 2
---
# Global Variables

## window.Yskra.version

- Type `string`

Application version.

## window.Yskra.platform

For more details, see [Modules. Platform](./modules/platform.md)

## window.Yskra.import()

- Type `(module: string) => any`

Request a global module.

### Available Modules in the Application {#available-modules}
- `vue` - [Vue](https://vuejs.org/api/)
- `router` - [Vue Router](https://router.vuejs.org/api/)
- `i18n` - [Vue i18n](https://vue-i18n.intlify.dev/api/general.html/)
- `pinia` - [Pinia](https://pinia.vuejs.org/api/modules/pinia.html#%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
- `vnode-utils` - [vue-vnode-utils](https://skirtles-code.github.io/vue-vnode-utils/)
- `arrow-navigation` - Vue 3 spatial navigation library
- `utils` - The `src/utils` directory of Yskra

::: details Utils {#utils}
<!--@include: ./utils.md{3,}-->
:::

## window.Yskra.package()

- Type
```typescript
{ 
    getInfo: (name: string) => { module: any; version: string; author: string };
    list: string[]; 
}
```
