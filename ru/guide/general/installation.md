# Установка {#installation}

## Установка в контейнере {#container}

Образ:
```shell
ghcr.io/yskra/yskra:latest
```

Пример запуска в Docker:
```bash
docker run -d 
  -p 80:8080 \
  -v path/to/config.json:/app/config.json \
  -v path/to/plugins:/app/plugins \
  ghcr.io/yskra/yskra:latest
```

- `config.json` - конфигурационный файл (смотрите по умолчанию [config.json](https://github.com/Yskra/yskra/blob/master/public/config.container.json)).

    Фактически конфигурация приложения по умолчанию, при первой загрузки используется как базовая конфигурация, потом клиенты будут локально хранить свои настройки.

- `/plugins` - каталог с плагинами `.js` или `.system.js`.

  Сгенерированный [манифест](../../reference/plugin-repository.md) будет доступен в `/local-plugins.json`.


## Установка в режиме разработки {#development}

### Требования {#requirements}

1. Установите [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

::: details Менеджер версий Node

Используйте менеджер версий Node, например, [Volta](https://volta.sh/) или [nvm](https://github.com/nvm-sh/nvm), чтобы избежать проблем с правами доступа и изменить версии Node.js.
Для запуска проекта требуется Node.js версии 20.19+ или выше.

:::

#### После установки Node включите corepack {#enable-corepack}

```bash
corepack enable
```

### Запустите проект Yskra {#run-yskra}

1. `git clone https://github.com/yskra/yskra.git`
2. `cd yskra`
3. `pnpm install`
4. `pnpm run dev`
