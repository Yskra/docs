---
outline: 2
---
# Getting Started {#getting-started}

To start developing plugins, you need to run the main Yskra project locally in development mode.

## Requirements {#requirements}

1. Install [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

::: details Node Version Manager

Use Node version manager, for example, [Volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm), to avoid compatibility issues with Node.js and to switch between Node.js versions.
For running the project, Node.js 20.19+ or higher is required.

:::


### Enabling Corepack After Installing Node {#enable-corepack}

```bash
corepack enable
```

## Running Yskra Project {#run-yskra}

1. `git clone https://github.com/yskra/yskra.git`
2. `cd yskra`
3. `pnpm install`
4. `pnpm run dev`

___

::: tip Developer Tools

At the bottom of the page, you will now see a button to enable Vue developer tools.

You can also open them in a new tab by visiting the link <ExternalLink href="http://localhost:8930/__devtools__/" />

*We won't go into detail about these tools for now. You can familiarize yourself with them independently or as needed while developing and reading documentation on some application modules*

![Developer Tools](/devtoolsPrew.png)
:::


