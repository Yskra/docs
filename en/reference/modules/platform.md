# Platform {#platform}

Collects information about the platform and browser version.

- Known TV platforms:
  * `Tizen` (TV SDK 4.0 - Tizen 8.0),
  * `WebOS` (WebOS TV 1.x - WebOS TV 24),
  * `AndroidTV` (coverage may be incomplete)

```ts
interface Platform {
  browser: string | undefined;
  version: number | 1;
  os: {
    family: string | undefined;
    version: number | 1;
  };
  isTV: boolean;
}
```

Available via the global variable `Yskra.platform`.
