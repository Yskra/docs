import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
  lang: 'ru-RU',
  description: 'Документация Yskra',

  themeConfig: {
    nav: [
      {
        text: 'Руководство',
        link: '/ru/guide/introduction',
        activeMatch: '/ru/guide/'
      },
      {
        text: 'Справочник',
        link: '/ru/reference/globals',
        activeMatch: '/ru/reference/'
      },
    ],

    sidebar: {
      '/ru/guide/': {
        base: '/ru/guide/', items: [
          { text: 'Введение', link: 'introduction' },
          {
            text: 'Плагины',
            base: '/ru/guide/plugins/',
            items: [
              { text: 'Стек технологий', link: 'stack' },
              { text: 'Публикация', link: 'publish' },
              { text: 'Рекомендации', link: 'guidelines' },
              {
                text: 'Основы',
                collapsed: false,
                items: [
                  { text: 'Начало', link: 'getting-started' },
                  { text: 'Первый плагин', link: 'first-plugin' },
                  { text: 'Vue компоненты', link: 'components' },
                  { text: 'Сборка плагина', link: 'bundler' },
                  { text: 'Настройки', link: 'settings' },
                  { text: 'Взаимодействие с плагинами', link: 'app-bus' },
                  { text: 'Интерфейс', link: 'ui' },
                  { text: 'Интернационализация', link: 'i18n' },
                ],
              },
              {
                text: 'Продвинутый уровень',
                collapsed: false,
                items: [
                  { text: 'Изменение функций', link: 'inject' },
                  { text: 'Изменение компонентов', link: 'component-inject' },
                ],
              },
            ]
          },
          {
            text: 'Приложение',
            collapsed: false,
            items: [
              { text: 'AppBus', link: 'app-bus' },
            ]
          },
        ]
      },
      '/ru/reference/': {
        base: '/ru/reference/', items: [
          {
            text: 'Справочник',
            items: [
              { text: 'Глобальные', link: 'globals' },
              { text: 'Репозиторий плагинов', link: 'plugin-repository' },
              {
                text: 'Плагин',
                base: '/ru/reference/plugin-',
                items: [
                  { text: 'Манифест', link: 'manifest' },
                  { text: 'Контекст', link: 'context' },
                ]
              },
              {
                text: 'Модули приложения',
                base: '/ru/reference/modules/',
                items: [
                  { text: 'AppBus', link: 'app-bus' },
                  { text: 'ComponentRegister', link: 'component-register' },
                  { text: 'ConfigEditor', link: 'config-editor' },
                  { text: 'I18n', link: 'i18n' },
                  { text: 'Injector', link: 'injector' },
                  { text: 'Logger', link: 'logger' },
                  { text: 'Platform', link: 'platform' },
                  { text: 'PluginManager', link: 'plugin-manager' },
                  { text: 'Router', link: 'router' },
                  { text: 'Settings', link: 'settings' },
                ]
              },
              {
                text: 'Встроенные плагины',
                base: '/ru/reference/builtin-plugins/',
                items: [
                  { text: 'TMDB', link: 'tmdb' },
                  { text: 'TMDB Proxy', link: 'tmdb-proxy' },
                  { text: 'UiKit', link: 'ui-kit' },
                  { text: 'WebPlayer', link: 'web-player' },
                ]
              },
            ]
          }
        ]
      }
    },

    editLink: {
      pattern: 'https://github.com/yskra/docs/edit/master/docs/:path',
      text: 'Редактировать страницу'
    },

    outline: { label: 'Содержание страницы', level: [2, 3] },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote:
        'Но если ты не изменишь направление и продолжишь искать, ты можешь оказаться там, куда направляешься.',
      linkLabel: 'перейти на главную',
      linkText: 'Отведи меня домой'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
    skipToContentLabel: 'Перейти к содержимому'
  },

  search: {
    placeholder: 'Поиск в документации',
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск'
      },
      modal: {
        searchBox: {
          clearButtonTitle: 'Очистить поиск',
          clearButtonAriaLabel: 'Очистить поиск',
          closeButtonText: 'Закрыть',
          closeButtonAriaLabel: 'Закрыть',
          placeholderText: 'Поиск в документации',
          placeholderTextAskAi: 'Задайте вопрос ИИ: ',
          placeholderTextAskAiStreaming: 'Формируется ответ...',
          searchInputLabel: 'Поиск',
          backToKeywordSearchButtonText:
            'Вернуться к поиску по ключевым словам',
          backToKeywordSearchButtonAriaLabel:
            'Вернуться к поиску по ключевым словам'
        },
        startScreen: {
          recentSearchesTitle: 'История поиска',
          noRecentSearchesText: 'Нет истории поиска',
          saveRecentSearchButtonTitle: 'Сохранить в истории поиска',
          removeRecentSearchButtonTitle: 'Удалить из истории поиска',
          favoriteSearchesTitle: 'Избранное',
          removeFavoriteSearchButtonTitle: 'Удалить из избранного',
          recentConversationsTitle: 'Недавние диалоги',
          removeRecentConversationButtonTitle: 'Удалить этот диалог из истории'
        },
        errorScreen: {
          titleText: 'Невозможно получить результаты',
          helpText: 'Проверьте подключение к Интернету'
        },
        noResultsScreen: {
          noResultsText: 'Ничего не найдено',
          suggestedQueryText: 'Попробуйте изменить запрос',
          reportMissingResultsText: 'Считаете, что результаты должны быть?',
          reportMissingResultsLinkText: 'Сообщите об этом'
        },
        resultsScreen: {
          askAiPlaceholder: 'Задайте вопрос ИИ: '
        },
        askAiScreen: {
          disclaimerText:
            'Ответы генерируются ИИ и могут содержать ошибки. Проверяйте информацию.',
          relatedSourcesText: 'Связанные источники',
          thinkingText: 'Думаю...',
          copyButtonText: 'Копировать',
          copyButtonCopiedText: 'Скопировано!',
          copyButtonTitle: 'Копировать',
          likeButtonTitle: 'Нравится',
          dislikeButtonTitle: 'Не нравится',
          thanksForFeedbackText: 'Спасибо за отзыв!',
          preToolCallText: 'Поиск...',
          duringToolCallText: 'Поиск ',
          afterToolCallText: 'Поиск завершён',
          aggregatedToolCallText: 'Поиск завершён'
        },
        footer: {
          selectText: 'выбрать',
          submitQuestionText: 'Отправить вопрос',
          selectKeyAriaLabel: 'Клавиша Enter',
          navigateText: 'перейти',
          navigateUpKeyAriaLabel: 'Стрелка вверх',
          navigateDownKeyAriaLabel: 'Стрелка вниз',
          closeText: 'закрыть',
          backToSearchText: 'Вернуться к поиску',
          closeKeyAriaLabel: 'Клавиша Esc',
          poweredByText: 'поиск от'
        }
      }
    }
  },
})
