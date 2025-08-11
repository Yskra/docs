# Platform {#platform}

Собирает информацию о платформе и версии браузера.

- Известные TV платформы: 
  * `Tizen` (TV SDK 4.0 - Tizen 8.0), 
  * `WebOS` (WebOS TV 1.x - WebOS TV 24),
  * `AndroidTV` (Возможно, не полное покрытие)

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

Доступен через глобальную переменную `Yskra.platform`
