import { defineAdditionalConfig } from 'vitepress'


export default defineAdditionalConfig({
  lang: 'en-US',
  description: 'Yskra Docs',

  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/en/guide/introduction',
        activeMatch: '/en/guide/'
      },
      {
        text: 'Reference',
        link: '/en/reference/globals',
        activeMatch: '/en/reference/'
      },
    ],

    sidebar: {
      '/en/guide/': {
        base: '/en/guide/', items: [
          { text: 'Introduction', link: 'introduction' },
          {
            text: 'General',
            base: '/en/guide/general/',
            items: [
              { text: 'Installation', link: 'installation' },
            ]
          },
          {
            text: 'Plugins',
            base: '/en/guide/plugins/',
            items: [
              { text: 'Stack technologies', link: 'stack' },
              { text: 'Publishing', link: 'publish' },
              { text: 'Guidelines', link: 'guidelines' },
              {
                text: 'Basics',
                collapsed: false,
                items: [
                  { text: 'Getting started', link: 'getting-started' },
                  { text: 'First plugin', link: 'first-plugin' },
                  { text: 'Vue components', link: 'components' },
                  { text: 'Plugin build', link: 'bundler' },
                  { text: 'Settings', link: 'settings' },
                  { text: 'Interaction with plugins', link: 'app-bus' },
                  { text: 'Interface', link: 'ui' },
                  { text: 'Internationalization', link: 'i18n' },
                  { text: 'Examples', link: 'examples' },
                ],
              },
              {
                text: 'Advanced level',
                collapsed: false,
                items: [
                  { text: 'Function patching', link: 'inject' },
                  { text: 'Component injection', link: 'component-inject' },
                ],
              },
            ]
          },
          {
            text: 'Application',
            collapsed: false,
            items: [
              { text: 'AppBus', link: 'app-bus' },
            ]
          },
        ]
      },
      '/en/reference/': {
        base: '/en/reference/', items: [
          {
            text: 'Reference',
            items: [
              { text: 'Globals', link: 'globals' },
              { text: 'Plugin repository', link: 'plugin-repository' },
              {
                text: 'Plugin',
                base: '/en/reference/plugin-',
                items: [
                  { text: 'Manifest', link: 'manifest' },
                  { text: 'Context', link: 'context' },
                ]
              },
              {
                text: 'Application modules',
                base: '/en/reference/modules/',
                items: [
                  { text: 'AppBus', link: 'app-bus' },
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
                text: 'Built-in plugins',
                base: '/en/reference/builtin-plugins/',
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
      pattern: 'https://github.com/yskra/docs/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
