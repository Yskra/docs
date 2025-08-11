---
outline: 3
---

# Settings {#settings}

Модуль для работы с настройками приложения.

Добавляет страницу на `/settings`.

## Подмодули {#modules}

### UserInterface {#ui}

* `settings/ui`

Модуль для работы с общими настройками пользователя. Может пока-что изменить главную страницу приложения и масштаб интерфейса.

### PlayerSettings {#player-settings}

* `settings/player`

Модуль для работы с плеером.

#### AppBus методы {#player-appBus-methods}

##### player:registerPlayer {#player-registerPlayer}
- Тип `(player: Player) => (() => undefined) | undefined`

```ts
interface Player {
    name: string;
    play: (url: URL) => void;
}
```

Регистрирует плеер.

Вернет функцию, которая удаляет регистрацию.

##### player:unregisterPlayer {#player-unregisterPlayer}
- Тип `(player: Player) => undefined`

Удаляет регистрацию плеера.

##### player:open {#player-open}
- Тип `(url: URL) => void`

Открыть URL в плеере по умолчанию. Плеер по умолчанию может быть выбран в настройках, в противном случаем берется первый из регистрированных плееров.
