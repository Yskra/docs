---
outline: 'deep'
---

# Плагин UI Kit {#ui-kit}

Весь визуальный вид и взаимодействие с приложением обеспечивается этим плагином.

## Методы AppBus {#appbus}

### Диалоги {#dialogs}
Элементы, которые накладываются на главный экран, затемняя остальную часть страницы позади них. Они часто используются для получения пользовательского ввода или отображения важной информации.

#### ui.dialog:confirm {#dialog-confirm}

- Тип 
```ts 
(text: string) => UseConfirmDialogReturn;
(o: {text: string, open: boolean}) => UseConfirmDialogReturn;
```
Окно подтверждения с кнопками OK и Отмена. Вернет контроллер [useConfirmDialog](https://vueuse.org/core/useConfirmDialog/)

Передайте `open: false` чтобы не открывать диалог по умолчанию, и открыть позже с помощью `UseConfirmDialogReturn.reveal()`

#### ui.dialog:prompt {#dialog-prompt}
- Тип
```ts
(text: string) => UseConfirmDialogReturn;
(text: string, placeholder: string) => UseConfirmDialogReturn;
(text: string, placeholder: string, validator: (v: string) => string | undefined) => UseConfirmDialogReturn;
(o: {text: string, placeholder: string, validator: (v: string) => string | undefined, open: boolean}) => UseConfirmDialogReturn;
```
Окно подтверждения с вводом текста и кнопками OK и Отмена. Вернет контроллер [useConfirmDialog](https://vueuse.org/core/useConfirmDialog/)

Передайте `open: false` чтобы не открывать диалог по умолчанию, и открыть позже с помощью `UseConfirmDialogReturn.reveal()`

#### ui.dialog:drawer {#dialog-drawer}
- Тип
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
Выезжающее справа модальное окно

Передайте `open: false` чтобы не открывать диалог по умолчанию, и открыть позже с помощью `DialogController.reveal()`

#### ui.dialog:modal {#dialog-modal}

- Тип
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
Модальное окно в центре экрана

Передайте `open: false` чтобы не открывать диалог по умолчанию, и открыть позже с помощью `DialogController.reveal()`


### Фон {#background}

Методы некоторых макетов (layout)

#### ui.background:setImage {#background-image}
- Тип 
```ts
(url: string) => undefined
```

Установить фоновое изображение для `BgImageLayout`

#### ui.background:isPresentationMode {#background-is-presentation-mode}

- Тип

```ts
Boolean
```
Режим презентации. Активирует режим прозрачности для `TheSidebar` на `/` страницах


### Уведомления {#notifications}

#### ui.notices:pushNotification {#notifications-push}
- Тип 
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

Добавить уведомление. Возвращает id уведомления

#### ui.notices:removeNotification {#notifications-remove}
- Тип
```ts
(id: string) => undefined
```

Отозвать уведомление


## Компоненты {#components}
Компоненты построены на базе библиотеки [DaisyUI](https://daisyui.com/components/). Поддерживают пространственную навигацию.

Компоненты доступны глобально

Цвета темы можно посмотреть в [Документации DaisyUI](https://daisyui.com/docs/colors/)

::: info WIP

Компоненты разрабатываются по мере необходимости и не все компоненты DaisyUI еще написаны.

:::

### Приложение {#app-components}

#### AppLink {#app-link}

Обертка вокруг [RouterLink](https://vue-router-ru.netlify.app/guide/#%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80)

### Интерфейс {#interface-components}

Для стилизации вариации компонента принимают пропсы `styling`, `color`, `size`, `modifier`, `direction`, `placement`, `type` формата:

```ts
type DaisyUIType = string | string[] | Record<string, boolean>
```

- Доступные цвета: `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`
- Доступные размеры: `xs`, `sm`, `md`, `lg`, `xl`
- остальные вариации уникальные для компонента

Так же большинство компонентов принимают пропс `:is` для использования другого компонента или тега

```vue
<BaseButton color="primary" size="md" modifier="wide">Click</BaseButton>

<BaseBadge is="span"/>
```

#### BaseBadge {#base-badge}

- [Документация](https://daisyui.com/components/badge/)
- styling
  * `outline`
  * `dash`
  * `soft`
  * `ghost`
- color
- size

Бейджи используются для информирования пользователя о состоянии конкретных данных. 

#### BaseButton {#base-button}

- [Документация](https://daisyui.com/components/button/)
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

Кнопки позволяют пользователю выполнять действия или делать выбор.

#### BaseCard {#base-card}

- [Документация](https://daisyui.com/components/card/)
- styling
  * `border`
  * `dash`
- modifier
  * `side`
  * `full`
- size

Карточки используются для группировки и отображения контента в легко читаемом виде.

#### BaseCheckbox {#base-checkbox}

- [Документация](https://daisyui.com/components/checkbox/)
- color
- size

Чекбокс используется для одновременного выбора нескольких значений.

#### BaseCollapse {#base-collapse}

- [Документация](https://daisyui.com/components/collapse/)
- modifier
  * `arrow`
  * `plus`
- Слоты
  * title
  * default

Сворачиваемая секция используется для отображения и скрытия контента.

#### BaseDivider {#base-divider}

- [Документация](https://daisyui.com/components/divider/)
- direction
  * `vertical`
  * `horizontal`
- placement
  * `start`
  * `end`
- color

Разделитель будет использоваться для разделения контента по вертикали или горизонтали.

#### BaseFilter {#base-filter}

- [Документация](https://daisyui.com/components/filter/)
- direction
  * `vertical`
  * `horizontal`
- placement
  * `start`
  * `end`
- color

Фильтр — это группа переключателей. Выбор одного из вариантов скроет другие и отобразит кнопку сброса рядом с выбранным параметром.

#### BaseFilterItem {#base-filter-item}

- [Документация](https://daisyui.com/components/filter/)
- Пропсы
  * label: `string`
  * type: `'reset' | 'value'`

Элемент фильтра — это кнопка в группе переключателей. По умолчанию `type` равен `value`. Если задать `reset`, то создается кнопка сброса.

#### BaseInput {#base-input}

- [Документация](https://daisyui.com/components/input/)
- modifier
  * `ghost`
- color
- size

Текстовый ввод — это простое поле ввода.

#### BaseLink {#base-link}

- [Документация](https://daisyui.com/components/link/)
- styling
  * `hover`
- color
- size

Link добавляет к ссылкам отсутствующий стиль подчеркивания.

#### BaseMenu {#base-menu}

- [Документация](https://daisyui.com/components/menu/)
- type
  * `dropdown`
- direction
  * `vertical`
  * `horizontal`
- size

Меню используется для отображения списка пунктов меню.

#### BaseMenuItem {#base-menu-item}

- [Документация](https://daisyui.com/components/menu/)
- type
  * `title`
- modifier
  * `disabled`
  * `active`
  * `focus`

Элемент меню используется для отображения пунктов меню.

#### BasePassword {#base-password}

**`<BaseInput/>`** с типом `password` и с атрибутом `autocomplete=current-password`

#### BaseProgress {#base-progress}

- [Документация](https://daisyui.com/components/progress/)
- Пропсы
  * max: `number`
  * value: `number`
- color

Индикатор выполнения можно использовать для отображения хода выполнения задачи или течения времени.

#### BaseSelect {#base-select}

- Пропсы
  * title: `string`
  * multiple?: `boolean` - включает режим multiple, после выбора не закрывает меню
- События
  * change: `(value: unknown) => void`
  * closed: `() => void`
- Слоты
  * open `{open: () => void}`
  * default

Меню с выбором одного из пунктов.

#### BaseSelectItem {#base-select-item}

- Пропсы
  * value: `unknown`
  * selected: `boolean`
- Слоты
  * label // только в режиме multiple, перезаписать полностью элемент, включая чекбокс
  * default

Элемент меню с выбором

#### BaseSkeleton {#base-skeleton}

- [Документация](https://daisyui.com/components/skeleton/)

Скелет — это компонент, который можно использовать для отображения состояния загрузки компонента. 
Используйте классы и стили для необходимой стилизации: размеры, фактор скругления и т.д.

#### BaseSlider {#base-slider}

- [Документация](https://daisyui.com/components/range/)
- color
- size

Ползунок диапазона используется для выбора значения путем перемещения маркера.

#### BaseTabs {#base-tabs}

- [Документация](https://daisyui.com/components/tab/)
- styling
  * `box`
  * `border`
  * `lift`
- placement
  * `top`
  * `bottom`
- size

Вкладки можно использовать для отображения контента в формате вкладок.

#### BaseTabsItem {#base-tabs-item}

- Пропсы
  * label: `string`
- Слоты
  * tab - Свой компонент вместо `label`
  * content - Содержимое вкладки

Элемент вкладки используется для создания вкладки формата, который можно использовать внутри **`<BaseTabs/>`**.

#### BaseToggle {#base-toggle}

- [Документация](https://daisyui.com/components/toggle/)
- color
- size

Переключатель — это чекбокс, оформленный в виде кнопки переключения.

#### BaseTooltip {#base-tooltip}

- [Документация](https://daisyui.com/components/tooltip/)

- Пропсы
  * data-tip: `string`
- Слоты
  * default
  * content - Содержимое всплывающей подсказки вместо `data-tip`

- modifier
  * `open`
- placement
  * `top`
  * `bottom`
  * `left`
  * `right`
- color

Всплывающую подсказку можно использовать для отображения сообщения при наведении курсора на элемент.

#### BaseUsername {#base-username}

**`<BaseInput/>`** с атрибутом `autocomplete=username`


### Специальные {#special-components}

#### FilmCard {#film-card}

Пропсы
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

Отображение карточки фильма.

### Продвинутые {#advanced-components}

#### YCarousel {#y-carousel}

Компонент для отображения карточек с изображениями и текстом

- Пропсы
  * items `Item[]`
  * isLoading `boolean`
- Слоты
  * item `(item: Item) => VNode`
  * after-items `() => VNode`
  * before-items `() => VNode`

```ts
interface Item {
  image?: string;
  id?: number | string;
  title?: string;
  releaseDate?: Date;
  link?: RouteLocationRaw;
}
```

Реализует [Carousel](https://daisyui.com/components/carousel/#full-bleed-carousel), только это картинка и текст снизу.

#### YConfirm {#y-confirm}

- Пропсы
  * text `string`
  * controller `UseConfirmDialogReturn<boolean, void, void>`

Показывает диалог подтверждения с кнопками OK и Отмена.

#### YDialog {#y-dialog}

- Пропсы
  * show `boolean`
- События
  * update:show `(value: boolean) => void`
- Слоты
  * default `{close: () => void}`

Базовое всплывающее окно в центре экрана

#### YDrawer {#y-drawer}

- Пропсы
  * show `boolean`
  * title `string`
- События
  * update:show `(value: boolean) => void`
- Слоты
  * title
  * default `{close: () => void}`

Выезжающее слева модальное окно

#### YModal {#y-modal}

- Пропсы
  * show `boolean`
  * title `string`
  * buttons `Button[]`
- События
  * update:show `(value: boolean) => void`
- Слоты
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

Модальное окно в центре экрана, с возможностью добавления кнопок

#### YNotification {#y-notification}

- Пропсы
  * notification `UINotification`
- События
  * timeout `() => void` Запускает таймаут сразу после монтирования компонента

```ts
interface UINotification {
  contentTitle?: string;
  contentText: string;
  icon?: string | Component | 'success' | 'error' | 'info';
  timeout?: number;
}

```
Прикладной компонент уведомления для `ui.notifications`

#### YPrompt {#y-prompt}

- Пропсы
  * text `string`
  * placeholder `string`
  * validator `((v: string) => string)`
  * validator `((v: string) => Promise<string>)`
  * controller `UseConfirmDialogReturn<string, string, void>`

Показывает диалог подтверждения с вводом текста и кнопками OK и Отмена.

#### YSlider {#y-slider}

- Пропсы
  * items `Item[]`
- Слоты
  * default `{index: number, item: Item}`

```ts
interface Item {
  href: string;
  id: number | string;
  title: string;
}
```

Показывает слайдер с картинками по очереди, в слот можно передать блок, который будет отображаться поверх картинки.

### Макеты {#layouts}

#### BackgroundImageLayout {#background-image-layout}

Используйте `ui.background:setImage` для установки фонового изображения.

#### DialogLayout {#dialog-layout}

- Пропсы
  * show `boolean`
  * leaveDuration `number`
- События
  * update:show `(value: boolean) => void`
- Слоты
  * default `{close: () => void}`

Основа всех всплывающих окон.
Добавляет затенение на фон, при клике на затмение закрывает окно.
Так же управляет окнам, чтобы одновременно было только одно активное окно.


#### SidebarLayout {#sidebar-layout}

- Слоты
  * sidebar
  * default

Макет для страниц с боковой панелью.

