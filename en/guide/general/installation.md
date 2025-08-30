# Installation {#installation}

## Installation in a container {#container}

Image:
```shell
ghcr.io/yskra/yskra:latest
```

Example of running in Docker:
```bash
docker run -d 
  -p 80:8080 \
  -v path/to/config.json:/app/config.json \
  -v path/to/plugins:/app/plugins \
  ghcr.io/yskra/yskra:latest
```

- `config.json` - configuration file (see default [config.json](https://github.com/Yskra/yskra/blob/master/public/config.container.json)).

    The configuration of the application is actually the default configuration, when the first loading is used as the base configuration, then the clients will locally store their settings.

- `/plugins` - directory with plugins `.js` or `.system.js`.

  Generated [manifest](../../reference/plugin-repository.md) will be available in `/local-plugins.json`.


## Installation in development mode {#development}

### Requirements {#requirements}

1. Install [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

::: details Node Version Manager

Use Node version manager, for example, [Volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm), to avoid compatibility issues with Node.js and to switch between Node.js versions.
For running the project, Node.js 20.19+ or higher is required.

:::


#### Enabling Corepack After Installing Node {#enable-corepack}

```bash
corepack enable
```

### Running Yskra Project {#run-yskra}

1. `git clone https://github.com/yskra/yskra.git`
2. `cd yskra`
3. `pnpm install`
4. `pnpm run dev`
