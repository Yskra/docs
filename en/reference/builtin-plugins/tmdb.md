# The Movie Database {#tmdb}

A plugin for fetching movie information from The Movie Database (TMDB).

## AppBus Methods {#tmdb-appbus}

### tmdb.endpoints:set {#tmdb-endpoints-set}

- Type
```ts
(args: { apiUrl: string, imageCdn: string }) => void
```

Set the API endpoint and image CDN
