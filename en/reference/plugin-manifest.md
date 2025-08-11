# Plugin Manifest {#manifest}

## id <Badge type="warning">Required</Badge>

- Format `dev.developerName.pluginName`

A unique identifier for your plugin. It is recommended to use a reverse domain notation with the username or organization name.

## name <Badge type="warning">Required</Badge> {#name}

- Format <Badge type="info">Unrestricted</Badge>

The name of your plugin. Latin characters are preferred but not mandatory.

## author <Badge type="warning">Required</Badge> {#author}

- Format <Badge type="info">Unrestricted</Badge>

The name of the plugin author.

## version <Badge type="warning">Required</Badge> {#version}

- Format `1.0.0`

The version of your plugin. Currently used only for [dependencies](#dependencies).

## source <Badge type="warning">Required</Badge> {#source}

- Format `URL`

A direct link where your plugin is located; this will be used during plugin installation.

## apiVersion <Badge type="warning">Required</Badge> {#api-version}

- Format `number`

- Available values: `0`

The version of the API being used.

## runtime {#runtime}

- Format `'es' | 'system'`

The runtime environment used. By default, it is assumed that the plugin uses ES.

## overview <Badge type="tip">Internationalization</Badge> {#overview}

- Format <Badge type="info">Unrestricted</Badge>

A brief description of your plugin. You can use a language code after `:` to localize the text.

```js
/**
 * @description:en  My plugin
 * @description:ru  Мой плагин
 */
```

## description <Badge type="tip">Internationalization</Badge> {#description}

- Format <Badge type="info">Unrestricted</Badge>

A detailed description of your plugin. You can use a language code after `:` to localize the text.

```js
/**
 * @description:en  My plugin description
 * @description:ru  Описание моего плагина
 */
```

## homepageUrl {#homepageurl}

- Format `URL`

A link to your plugin's homepage.

## supportUrl {#supporturl}

- Format `URL`

A link to your plugin's support page or bug tracker.

## imageUrl {#imageurl}

- Format `URL | Data:URI`

A link to your plugin's image.

## flags <Badge type="tip">Array</Badge> {#flags}

- Format <Badge type="info">Unknown</Badge> `a list of flags will be provided here`

An array of flags for your plugin.

## permissions <Badge type="danger">Not implemented</Badge> <Badge type="tip">Array</Badge> {#permissions}

- Format <Badge type="info">Unknown</Badge>

An array of permissions for your plugin.

## dependencies <Badge type="tip">Array</Badge> {#dependencies}

- Format `ID:minimum_version`

An array of your plugin's dependencies. The plugin will be loaded only after all dependencies have been mounted.

```js
/**
 * @dependencies dev.developer.plugin:1.0.0
 * @dependencies dev.developer.plugin2:1.0.0
 */
```
