---
outline: 2
---
# Getting Started {#getting-started}

To start developing plugins, you need to run the main Yskra project locally in development mode.

## JavaScript Runtime Environment {#js-runtime}

In general, you can use any JavaScript runtime environment that supports ESM and Node.js API. Node.js can be installed using two popular methods:

1. NodeVersionManager

> Recommended

- [Unix](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- [Windows](https://github.com/coreybutler/nvm-windows)

After installation, install the latest version of Node:
```bash
nvm install node
```

2. NodeJS

> Simpler option

Install Node directly from the [official website](https://nodejs.org/en/download/)


### Enabling Corepack After Installing Node {#enable-corepack}

```bash
corepack enable
```

## Running Yskra Project {#run-yskra}

1. `git clone https://github.com/yskra-app/yskra.git`
2. `cd yskra`
3. `pnpm install`
4. `pnpm run dev`

___

::: tip Developer Tools

At the bottom of the page, you will now see a button to enable Vue developer tools.

You can also open them in a new tab by visiting the link http://localhost:8930/__devtools__/

*We won't go into detail about these tools for now. You can familiarize yourself with them independently or as needed while developing and reading documentation on some application modules*

![Developer Tools](/devtoolsPrew.png)
:::


