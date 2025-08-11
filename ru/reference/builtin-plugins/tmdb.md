# The Movie Database {#tmdb}

Плагин для получения информации о фильмах из The Movie Database

## Методы AppBus {#tmdb-appbus}

### tmdb.endpoints:set {#tmdb-endpoints-set}

- Тип
```ts
(args: { apiUrl: string, imageCdn: string }) => void
```

Установить конечную точку API и CDN для изображений
