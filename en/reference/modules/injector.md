# Injector {#injector}

An interface for convenient [Monkey patching](https://en.wikipedia.org/wiki/Monkey_patch) into modules.

All code injections should use this module instead of directly replacing functions in a module, to ensure the correct order of simultaneous injections and simplify debugging.

Available only as part of the [plugin context](../plugin-context.md).

## Methods {#methods}

### inject.pre() {#inject-pre}

- Type:
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

- Example:
```ts
ctx.inject.pre(module, 'method', (args) => {
    if (typeof args[0] === 'number') {
        return args[0] * 2;
    }
    return args;
});
```

Patches a module **before** the function call, to modify the arguments. Return `false` to cancel the function call.

Returns the patch identifier, which can be used to remove the patch. You can also set a custom identifier using the `debugId` parameter.

### inject.post() {#inject-post}

- Type:
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

- Example:
```ts
ctx.inject.post(module, 'method', (returned, args) => {
    if (typeof returned === 'number') {
        return returned / 2;
    }
});
```

Patches a module **after** the function call, to modify the function's result. Return a value to override the original result; otherwise, the original result will be used.

Returns the patch identifier, which can be used to remove the patch. You can also set a custom identifier using the `debugId` parameter.

### inject.uninject() {#uninject}

- Type:
```ts
(injectionId: string) => undefined;
```

Removes a patch by its identifier.
