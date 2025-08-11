# Logger {#logger}

Logs messages to the console and to the `settings/logs` page.

You can create a logger using the `Logger` class from the `utils` directory. Pass a name as a parameter, which is typically the [plugin name](../plugin-manifest.md#name).

```js
const { Logger } = Yskra.import('utils');

const logger = new Logger('MyPlugin');
```

## Methods {#methods}

### Logger.info() {#info}

- Type `(...args: any[]) => undefined;`

Log an informational message.

### Logger.error() {#error}

- Type `(...args: any[]) => undefined;`

Log an error message.

### Logger.warn() {#warn}

- Type `(...args: any[]) => undefined;`

Log a warning message.
