# Logger {#logger}

Запись журналов в консоль и на страницу `settings/logs`.

Создать логгер можно с помощью класса `Logger` из каталога `utils`. В качестве параметра передается имя, как правило, это должно быть [имя плагина](../plugin-manifest.md#name).

```js
const { Logger } = Yskra.import('utils');

const logger = new Logger('MyPlugin');
```

## Методы {#methods}

### Logger.info() {#info}

- Тип `(...args: any[]) => undefined;`

Записать в журнал информацию.

### Logger.error() {#error}

- Тип `(...args: any[]) => undefined;`

Записать в журнал ошибку.

### Logger.warn() {#warn}

- Тип `(...args: any[]) => undefined;`

Записать в журнал предупреждение.
