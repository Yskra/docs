---
outline: 2
---
# Прежде чем начать {#getting-started}

Вам необходимо запустить основной проект Yskra локально в режиме разработки, чтобы получить доступ к функциям для разработки плагинов.


## Окружение среды выполнения JavaScript {#js-runtime}

В общем, вы можете использовать любую среду выполнения JavaScript, которая поддерживает ESM и Nodejs API, Nodejs можно установить 2 популярными способами:

1. NodeVersionManager

> Рекомендуется

- [Unix](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- [Венда](https://github.com/coreybutler/nvm-windows)

После установки выполните установку последней версии Node
```bash
nvm install node
```

2. NodeJS

> Вариант попроще 

Установить Node напрямую [с официального сайта](https://nodejs.org/en/download/)


### После установки Node включите экстремальную функцию {#enable-corepack}

```bash
corepack enable
```


## Запустите проект Yskra {#run-yskra}

1. `git clone https://github.com/yskra/yskra.git`
2. `cd yskra`
3. `pnpm install`
4. `pnpm run dev`

___

::: tip Инструмента разработчика

Внизу страницы вы теперь можете увидеть кнопку для включения инструментов разработчика Vue.

Так же вы можете открыть их в отдельно новой вкладке по ссылке <ExternalLink href="http://localhost:8930/__devtools__/" />

*Подробно разбирать сейчас их не будем, вы можете ознакомиться с ними самостоятельно или по мере разработки и чтения документации некоторых модулей приложения*

![Инструмента разработчика](/devtoolsPrew.png)
:::

