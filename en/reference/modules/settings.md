---
outline: 3
---

# Settings {#settings}

A module for managing application settings.

Adds a page at `/settings`.

## Submodules {#modules}

### UserInterface {#ui}

* `settings/ui`

A module for managing general user settings. Currently, allows changing the application's home page and the interface scale.

### PlayerSettings {#player-settings}

* `settings/player`

A module for managing the player.

#### AppBus Methods {#player-appBus-methods}

##### player:registerPlayer {#player-registerPlayer}
- Type `(player: Player) => (() => undefined) | undefined`

```ts
interface Player {
    name: string;
    play: (url: URL) => void;
}
```

Registers a player.

Returns a function that removes the registration.

##### player:unregisterPlayer {#player-unregisterPlayer}
- Type `(player: Player) => undefined`

Removes player registration.

##### player:open {#player-open}
- Type `(url: URL) => void`

Opens a URL in the default player. The default player can be selected in the settings; otherwise, the first registered player is used.
