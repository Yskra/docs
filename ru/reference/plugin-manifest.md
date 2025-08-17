# Манифест плагина {#manifest}


## id <Badge type="warning">Обязательный</Badge>

- Формат `dev.developerName.pluginName`

Уникальный идентификатор вашего плагина. Рекомендуется для просты обратный домен с именем пользователя или организации


## name <Badge type="warning">Обязательный</Badge> {#name}

- Формат <Badge type="info">Без ограничений</Badge>

Название вашего плагина. Желательно в латинице, но не обязательно


## author <Badge type="warning">Обязательный</Badge> {#author}

- Формат <Badge type="info">Без ограничений</Badge>

Имя автора плагина


## version <Badge type="warning">Обязательный</Badge> {#version}

- Формат `1.0.0`

Версия вашего плагина. Пока что используется только для [зависимостей](#dependencies)


## source <Badge type="warning">Обязательный</Badge> {#source}

- Формат `URL`

Прямая ссылка, где находится ваш плагин, она будет использоваться при установке плагина

## apiVersion <Badge type="warning">Обязательный</Badge> {#api-version}

- Формат `number`

- Доступные значения: `0`

Версия используемого апи

## license <Badge type="warning">Обязательный</Badge> {#license}

- Формат [SPDX-идентификатор](https://spdx.org/licenses/) или `UNLICENSED`

Лицензия, под которой распространяется плагин. Например `MIT`, `MPL-2.0`, `UNLICENSED`

## runtime {#runtime}

- Формат `'es'|'system'`

Используемая среда выполнения. По умолчанию считается, что плагин использует ES


## overview <Badge type="tip">Интернационализация</Badge> {#overview}

- Формат <Badge type="info">Без ограничений</Badge>

Краткое описание вашего плагина. Можно использовать имя языка через `:` для локализации текста

```js
/**
 * @description:en  My plugin
 * @description:ru  Мой плагин
 */
```


## description <Badge type="tip">Интернационализация</Badge> {#description}

- Формат <Badge type="info">Без ограничений</Badge>

Подробное описание вашего плагина. Можно использовать имя языка через `:` для локализации текста

```js
/**
 * @description:en  My plugin description
 * @description:ru  Описание моего плагина
 */
```

## homepageUrl {#homepageurl}

- Формат `URL`

Ссылка на домашнюю страницу вашего плагина


## supportUrl {#supporturl}

- Формат `URL`

Ссылка на страницу поддержки или баг-трекера вашего плагина


## imageUrl {#imageurl}

- Формат `URL | Data:URI`

Ссылка на изображение вашего плагина.


## flags <Badge type="tip">Массив</Badge> {#flags}

- Формат  <Badge type="info">Неизвестно</Badge> `тут будет список флагов`

Массив флагов вашего плагина


## permissions <Badge type="danger">Не реализовано</Badge> <Badge type="tip">Массив</Badge> {#permissions}

- Формат <Badge type="info">Неизвестно</Badge>

Массив разрешений вашего плагина


## dependencies <Badge type="tip">Массив</Badge> {#dependencies}

- Формат `ID:минимальная_версия`

Массив зависимостей вашего плагина. Плагин будет загружен только после монтирования всех зависимостей

```js
/**
 * @dependencies dev.developer.plugin:1.0.0
 * @dependencies dev.developer.plugin2:1.0.0
 */
```
