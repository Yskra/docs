# Примеры плагинов {#examples}

Примеры рабочих плагинов для начала разработки собственных плагинов.

## Встроенные плагины {#builtin-plugins}

Встроенные плагины в приложении можно найти в `yskra/src/plugins`, или [github](https://github.com/Yskra/yskra/tree/master/src/plugins)

::: tip Примечание

Имейте в виду, что плагины пропускают привычную сборку, которую вы делаете с vite, так как они собираются с приложением и пути imports будут отличаться, так как нет необходимости полагаться `Yskra.import()`

Так же в манифесте плагинов **source** равен `null`, и используется `mian.js` как точка входа.

В остальном плагины работают точно так же как обычные

:::

## Iframe plugin {#iframe-plugin}

Добавляет кастомный плеер в WebPlayer для поддержки сторонних плееров через iframe

[Github](https://github.com/Yskra/iframe-player-plugin/tree/master/plugin)

## Xinos плагины {#xinos-plugins}

Плагины Xinos [github](https://github.com/userXinos/yskra-plugins)
