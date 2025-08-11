# Recommendations {#guidelines}

These are recommendations that plugins should follow and aspire to be included in the Yskra plugin repository.

::: warning Work in progress

The recommendations for developing plugins are still under development and may be changed in the future.

:::

## General Recommendations {#general}

1. The plugin should not work beyond its intended functionality.
   - This includes, among other things: replacing unconnected components, introducing unnecessary buttons or badges.

2. The plugin should not change the Yskra user interface.

   This is necessary to ensure a uniform user interface/UX, prevent user confusion, and prevent errors.

3. The plugin should not collect user data without their consent.


## Code {#code}

1. The plugin should not modify global fields or existing `prototype`.

2. The plugin must remove all its changes/modifications when unmounted.
   - This includes changes to the user interface, fixes, intervals, timeouts, and subscriptions.
   - It's also preferable to avoid side effects during module loading (a module executes some code on import but without running the plugin, for example).

3. High self-sufficiency of the plugin.
   - Depend minimally on external resources.
   - Should include as much necessary code in its `.js` file.
   - Include all CSS styles within its module.
   - If possible, use [Data:URI](https://developer.mozilla.org/ru/docs/Web/URI/Schemes/data) instead of URLs for all resources (icons, images, workers).

   This will simplify the distribution of the plugin without binding it to a specific host and provide stability when a dependent host becomes unavailable due to any reason.

4. All requests to external APIs should have a wait timeout.

   This will prevent your plugin from hanging if the API is not available (Chromium has a 300-second timeout for requests).

:::: details Example Code
::: code-group
```js [fetch]
const controller = new AbortController();
const timeout = 5000;

const timeoutId = setTimeout(controller.abort, timeout);

fetch('https://api.example.com/data', { signal: controller.signal })
        .finally(() => clearTimeout(timeoutId));
```
```js [useFetch]
const { useFetch } = Yskra.import('utils');
const timeout = 5000;

useFetch('https://api.example.com/data', { timeout });
```
:::
::::


## Security {#security}

1. The plugin should not remove security functions.

2. The plugin should not use libraries with closed source code.
