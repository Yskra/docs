---
outline: 'deep'
---
# UI Kit Plugin {#ui-kit}
All visual appearance and user interaction with the application is provided by this plugin.

## AppBus Methods {#appbus}

### Dialogs {#dialogs}
Elements that overlay the main screen, dimming the rest of the page behind them. They are often used to obtain user input or display important information.

#### ui.dialog:confirm {#dialog-confirm}
- Type
```ts 
(text: string) => UseConfirmDialogReturn;
(o: {text: string, open: boolean}) => UseConfirmDialogReturn;
```
A confirmation dialog with OK and Cancel buttons. Returns the [useConfirmDialog](https://vueuse.org/core/useConfirmDialog/) controller.
Pass `open: false` to prevent the dialog from opening by default, and open it later using `UseConfirmDialogReturn.reveal()`.

#### ui.dialog:prompt {#dialog-prompt}
- Type
```ts
(text: string) => UseConfirmDialogReturn;
(text: string, placeholder: string) => UseConfirmDialogReturn;
(text: string, placeholder: string, validator: (v: string) => string | undefined) => UseConfirmDialogReturn;
(o: {text: string, placeholder: string, validator: (v: string) => string | undefined, open: boolean}) => UseConfirmDialogReturn;
```
A confirmation dialog with text input and OK and Cancel buttons. Returns the [useConfirmDialog](https://vueuse.org/core/useConfirmDialog/) controller.
Pass `open: false` to prevent the dialog from opening by default, and open it later using `UseConfirmDialogReturn.reveal()`.

#### ui.dialog:drawer {#dialog-drawer}
- Type
```ts
(opts: { body: VNode, title: string | VNode }) => DialogController;
(opts: { body: VNode, title: string | VNode, open: boolean }) => DialogController;
```
```ts
interface DialogController {
    isOpened: Ref<boolean>;
    close: () => void;
    reveal: () => Promise<void>;
}
```
A modal panel that slides in from the right.
Pass `open: false` to prevent the dialog from opening by default, and open it later using `DialogController.reveal()`.

#### ui.dialog:modal {#dialog-modal}
- Type
```ts
(o: { body: VNode, title: string | VNode }) => DialogController;
(o: { body: VNode, title: string | VNode, buttons: Button[] }) => DialogController;
(o: { body: VNode, title: string | VNode, buttons: Button[], footer: VNode }) => DialogController;
(o: { body: VNode, title: string | VNode, buttons: Button[], footer: VNode, open: boolean }) => DialogController
```
```ts
interface DialogController {
    isOpened: Ref<boolean>;
    close: () => void;
    reveal: () => Promise<void>;
}
interface Button {
    is?: FunctionalComponent;
    text: string;
    type: DaisyUIType;
    onClick: (ctx: { close: () => void, event: Event }) => void;
}
type DaisyUIType = string | string[] | Record<string, boolean>
```
A centered modal window on the screen.
Pass `open: false` to prevent the dialog from opening by default, and open it later using `DialogController.reveal()`.

### Background {#background}
Methods for certain layouts.

#### ui.background:setImage {#background-image}
- Type
```ts
(url: string) => undefined
```
Set a background image for the `BgImageLayout`.

#### ui.background:isPresentationMode {#background-is-presentation-mode}
- Type
```ts
Boolean
```
Presentation mode. Activates transparent mode for `TheSidebar` on `/` pages.

### Notifications {#notifications}

#### ui.notices:pushNotification {#notifications-push}
- Type
```ts 
(notification: UINotification) => string
```
```ts
export interface UINotification {
    contentTitle?: string;
    contentText: string;
    icon?: string | Component | 'success' | 'error' | 'info';
    timeout?: number;
}
```
Add a notification. Returns the notification ID.

#### ui.notices:removeNotification {#notifications-remove}
- Type
```ts
(id: string) => undefined
```
Remove a notification.

## Components {#components}
Components are built on top of the [DaisyUI](https://daisyui.com/components/) library. Support spatial navigation.
Components are globally available.
Theme colors can be viewed in the [DaisyUI Documentation](https://daisyui.com/docs/colors/).

::: info WIP
Components are developed as needed, and not all DaisyUI components have been implemented yet.
:::

### Application {#app-components}

#### AppLink {#app-link}
Wrapper around [RouterLink](https://vue-router-ru.netlify.app/guide/#%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80).

### Interface {#interface-components}
For styling, component variants accept props `styling`, `color`, `size`, `modifier`, `direction`, `placement`, `type` in the format:
```ts
type DaisyUIType = string | string[] | Record<string, boolean>
```
- Available colors: `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`
- Available sizes: `xs`, `sm`, `md`, `lg`, `xl`
- Other variations are unique to each component.
  Additionally, most components accept the `:is` prop to use a different component or tag.
```vue
<BaseButton color="primary" size="md" modifier="wide">Click</BaseButton>
<BaseBadge is="span"/>
```

#### BaseBadge {#base-badge}
- [Documentation](https://daisyui.com/components/badge/)
- styling
  * `outline`
  * `dash`
  * `soft`
  * `ghost`
- color
- size

Badges are used to inform users about the status of specific data.

#### BaseButton {#base-button}
- [Documentation](https://daisyui.com/components/button/)
- styling
  * `outline`
  * `soft`
  * `ghost`
  * `link`
  * `active`
- modifier
  * `wide`
  * `block`
  * `square`
  * `circle`
- color
- size

Buttons allow users to perform actions or make choices.

#### BaseCard {#base-card}
- [Documentation](https://daisyui.com/components/card/)
- styling
  * `border`
  * `dash`
- modifier
  * `side`
  * `full`
- size

Cards are used to group and display content in an easily readable format.

#### BaseCheckbox {#base-checkbox}

- [Documentation](https://daisyui.com/components/checkbox/)
- color
- size

Checkbox is used to select multiple values.

#### BaseCollapse {#base-collapse}
- [Documentation](https://daisyui.com/components/collapse/)
- modifier
  * `arrow`
  * `plus`
- Slots
  * title
  * default

A collapsible section used to show and hide content.

#### BaseDivider {#base-divider}
- [Documentation](https://daisyui.com/components/divider/)
- direction
  * `vertical`
  * `horizontal`
- placement
  * `start`
  * `end`
- color

A divider is used to separate content vertically or horizontally.

#### BaseFilter {#base-filter}
- [Documentation](https://daisyui.com/components/filter/)
- direction
  * `vertical`
  * `horizontal`
- placement
  * `start`
  * `end`
- color

A filter is a group of toggle buttons. Selecting one option hides the others and displays a reset button next to the selected option.

#### BaseFilterItem {#base-filter-item}
- [Documentation](https://daisyui.com/components/filter/)
- Props
  * label: `string`
  * type: `'reset' | 'value'`

A filter item is a button within a group of toggles. By default, `type` is `value`. If set to `reset`, it creates a reset button.

#### BaseInput {#base-input}
- [Documentation](https://daisyui.com/components/input/)
- modifier
  * `ghost`
- color
- size

Text input is a simple input field.

#### BaseLink {#base-link}
- [Documentation](https://daisyui.com/components/link/)
- styling
  * `hover`
- color
- size

Link adds missing underline styling to links.

#### BaseMenu {#base-menu}
- [Documentation](https://daisyui.com/components/menu/)
- type
  * `dropdown`
- direction
  * `vertical`
  * `horizontal`
- size

Menus are used to display a list of menu items.

#### BaseMenuItem {#base-menu-item}
- [Documentation](https://daisyui.com/components/menu/)
- type
  * `title`
- modifier
  * `disabled`
  * `active`
  * `focus`

A menu item is used to display individual menu entries.

#### BasePassword {#base-password}
**`<BaseInput/>`** with type `password` and attribute `autocomplete=current-password`.

#### BaseProgress {#base-progress}
- [Documentation](https://daisyui.com/components/progress/)
- Props
  * max: `number`
  * value: `number`
- color

Progress indicators can be used to show the progress of a task or the passage of time.

#### BaseSelect {#base-select}
- Props
  * title: `string`
  * multiple?: `boolean` - enables multiple selection mode, after selection does not close the menu
- Events
  * change: `(value: unknown) => void`
  * closed: `() => void`
- Slots
  * open `{open: () => void}`
  * default

A menu for selecting one of the options.

#### BaseSelectItem {#base-select-item}
- Props
  * value: `unknown`
  * selected: `boolean`
- Slots
  * label // only in multiple mode, overwrite completely the element, including the checkbox
  * default

An item within a selection menu.

#### BaseSkeleton {#base-skeleton}
- [Documentation](https://daisyui.com/components/skeleton/)

A skeleton is a component used to display the loading state of another component.
  Use classes and styles for required customization: size, border radius, etc.

#### BaseSlider {#base-slider}
- [Documentation](https://daisyui.com/components/range/)
- color
- size

A range slider is used to select a value by moving a marker.

#### BaseTabs {#base-tabs}
- [Documentation](https://daisyui.com/components/tab/)
- styling
  * `box`
  * `border`
  * `lift`
- placement
  * `top`
  * `bottom`
- size

Tabs can be used to display content in a tabbed format.

#### BaseTabsItem {#base-tabs-item}
- Props
  * label: `string`
- Slots
  * tab - Custom component instead of `label`
  * content - Tab content

A tab item used to create a tab that can be used inside **`<BaseTabs/>`**.

#### BaseToggle {#base-toggle}
- [Documentation](https://daisyui.com/components/toggle/)
- color
- size

A toggle is a checkbox styled as a switch button.

#### BaseTooltip {#base-tooltip}
- [Documentation](https://daisyui.com/components/tooltip/)
- Props
  * data-tip: `string`
- Slots
  * default
  * content - Tooltip content instead of `data-tip`
- modifier
  * `open`
- placement
  * `top`
  * `bottom`
  * `left`
  * `right`
- color

Tooltips can be used to display a message when hovering over an element.

#### BaseUsername {#base-username}
**`<BaseInput/>`** with attribute `autocomplete=username`.

### Special {#special-components}

#### FilmCard {#film-card}
Props
- hero `Hero`
- similar `YCarouselPropsItem['items']`
- collection `{ name: string; parts: YCarouselPropsItem['items'] }`
- peoples `{crew: People[]; cast: People[] }`
- isLoading `boolean`
- additionalActions `FilmCardAction[]`
```ts
interface Hero {
  id: number;
  type: 'movie' | 'tv';
  ids: FilmCardIDs;
  isAdult: boolean;
  image: string;
  overview: string;
  title: string;
  originalTitle: string;
  releaseDate: Date;
  runtime: Date;
  productionCountries: { id: unknown; name: string }[];
  genres: [{ id: unknown; name: string }];
  voteAverage: number;
  certification: string;
  revenue: string;
  budget: string;
}
interface FilmCardIDs {
  tmdb?: number;
  imdb?: string; // format 'tt1234567'
  wikidata?: string;
}
interface YCarouselPropsItem {
  image?: string;
  id?: number | string;
  title?: string;
  releaseDate?: Date;
  link?: RouteLocationRaw;
}
interface People {
  name?: string;
  subName?: string;
  id: number;
  image?: string;
}
interface FilmCardAction {
  id: string;
  name: string;
  icon: string | VNode;
  isAvailable: (payload: FilmCardButtonPayload) => boolean | Promise<boolean>;
  action: (payload: FilmCardButtonPayload) => void;
}
interface FilmCardButtonPayload {
  ids: FilmCardIDs;
  type: 'movie' | 'tv';
  title?: string;
  originalTitle?: string;
  releaseDate?: Date;
  image?: string;
  event?: Event;
}
```

Displays a film card.

### Advanced {#advanced-components}

#### YCarousel {#y-carousel}
Component for displaying cards with images and text.

- Props
  * items `Item[]`
  * isLoading `boolean`
```ts
interface Item {
  image?: string;
  id?: number | string;
  title?: string;
  releaseDate?: Date;
  link?: RouteLocationRaw;
}
```
Implements [Carousel](https://daisyui.com/components/carousel/#full-bleed-carousel), but with an image and text below.

#### YConfirm {#y-confirm}
- Props
  * text `string`
  * controller `UseConfirmDialogReturn<boolean, void, void>`

Displays a confirmation dialog with OK and Cancel buttons.

#### YDialog {#y-dialog}
- Props
  * show `boolean`
- Events
  * update:show `(value: boolean) => void`
- Slots
  * default `{close: () => void}`

A basic popup window centered on the screen.

#### YDrawer {#y-drawer}
- Props
  * show `boolean`
  * title `string`
- Events
  * update:show `(value: boolean) => void`
- Slots
  * title
  * default `{close: () => void}`

A modal panel that slides in from the left.

#### YModal {#y-modal}
- Props
  * show `boolean`
  * title `string`
  * buttons `Button[]`
- Events
  * update:show `(value: boolean) => void`
- Slots
  * title `{close: () => void}`
  * footer `{close: () => void}`
  * default `{close: () => void}`
```ts
interface Button {
    is?: Component;
    label: string;
    type: DaisyUIType;
    onClick: (ctx: ButtonCtx) => void;
}
interface ButtonCtx {
  close: () => void;
  event: Event;
}
```

A centered modal window with the ability to add buttons.

#### YNotification {#y-notification}
- Props
  * notification `UINotification`
- Events
  * timeout `() => void` Triggers the timeout immediately after component mounting.
```ts
interface UINotification {
  contentTitle?: string;
  contentText: string;
  icon?: string | Component | 'success' | 'error' | 'info';
  timeout?: number;
}
```

Application-level notification component for `ui.notifications`.

#### YPrompt {#y-prompt}
- Props
  * text `string`
  * placeholder `string`
  * validator `((v: string) => string)`
  * validator `((v: string) => Promise<string>)`
  * controller `UseConfirmDialogReturn<string, string, void>`
    Displays a confirmation dialog with text input and OK and Cancel buttons.

#### YSlider {#y-slider}
- Props
  * items `Item[]`
- Slots
  * default `{index: number, item: Item}`
```ts
interface Item {
  href: string;
  id: number | string;
  title: string;
}
```

Displays a slider showing images one after another. A slot can be used to display content over the image.

### Layouts {#layouts}

#### BackgroundImageLayout {#background-image-layout}
Use `ui.background:setImage` to set the background image.

#### DialogLayout {#dialog-layout}
- Props
  * show `boolean`
  * leaveDuration `number`
- Events
  * update:show `(value: boolean) => void`
- Slots
  * default `{close: () => void}`
    Base layout for all popup windows.
    Adds a backdrop overlay; clicking on it closes the window.
    Also manages dialogs to ensure only one is active at a time.

#### SidebarLayout {#sidebar-layout}
- Slots
  * sidebar
  * default
    Layout for pages with a sidebar.
