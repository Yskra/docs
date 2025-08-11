# Injector {#injector}

Интерфейс для удобного [Monkey patch](https://ru.wikipedia.org/wiki/Monkey_patch) в модули

Для всех инъекций кода надо использовать этот модуль, вместо прямой замены функции в модуле, чтобы обеспечить правильный порядок одновременных инъекций и простоту отладки.

Доступен только как часть [контекста плагина](../plugin-context.md).

## Методы {#methods}

### inject.pre() {#inject-pre}

- Тип:
```ts
(target: Target, methodName: string, patch: PatchPreInjection) => string;
(target: Target, methodName: string, patch: PatchPreInjection, debugId: string) => string;
```

```ts
type Target = Record<string, methodName>;

type TargetInjection<T extends Record<string, unknown>, K extends string> = T
    & { [key in K]: (...args: unknown[]) => unknown; }
    & { __injections?: Record<string, string> }; // Injector internal ids


type PatchPreInjection = (originalArgs: unknown[]) => unknown[] | false;
```

-  Пример:
```ts
ctx.inject.pre(module, 'method', (args) => {
    if (typeof args[0] === 'number') {
        return args[0] * 2;
    }
    return args;
});
```

Патч модуля **до** вызова функции, для изменения аргументов. Верните `false`, чтобы отменить вызов функции.

Вернет идентификатор патча, который можно использовать для отмены патча, так же можно установить идентификатор самостоятельно, через `debugId` параметр.


### inject.post() {#inject-post}

- Тип:
```ts
(target: Target, methodName: string, patch: PatchPostInjection) => string;
(target: Target, methodName: string, patch: PatchPostInjection, debugId: string) => string;
```

```ts
type Target = Record<string, methodName>;

type TargetInjection<T extends Record<string, unknown>, K extends string> = T
    & { [key in K]: (...args: unknown[]) => unknown; }
    & { __injections?: Record<string, string> }; // Injector internal ids

type PatchPostInjection = (returned: any, originalArgs: unknown[]) => unknown | undefined;
```

- Пример:
```ts
ctx.inject.post(module, 'method', (returned, args) => {
    if (typeof returned === 'number') {
        return returned / 2;
    }
});
```

Патч модуля **после** вызова функции, для изменения результата функции. Верните значение, в противном случае будет использован оригинальный результат.

Вернет идентификатор патча, который можно использовать для отмены патча, так же можно установить идентификатор самостоятельно, через `debugId` параметр.

### inject.uninject() {#uninject}

- Тип:
```ts
(injectionId: string) => undefined;
```

Удалить патч по идентификатору.
