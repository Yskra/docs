import { defineConfig, resolveSiteDataByRoute } from 'vitepress';
import locales from "./locales.js";

const prod = !!process.env.PRODUCTION;

export default defineConfig({
  title: 'Yskra Docs',

  vite: {
    server: {
      port: 8931
    }
  },

  rewrites: {
    'en/index.md': 'index.md',
    // 'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    config(md) {
      const fence = md.renderer.rules.fence
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'es':
              return 'Copiar código'
            case 'fa':
              return 'کپی کد'
            case 'ko':
              return '코드 복사'
            case 'pt':
              return 'Copiar código'
            case 'ru':
              return 'Скопировать код'
            case 'zh':
              return '复制代码'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      //md.use(groupIconMdPlugin)
    }
  },

  sitemap: {
    hostname: 'https://docs.yskra.app',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    // ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    // ['meta', { property: 'og:site_name', content: 'VitePress' }],
    // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    // ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  ],

  themeConfig: {
    // logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yskra' }
    ],

    outline: [2, 3],

    search: {
      provider: 'local',
    },
  },

  locales: locales,


  transformPageData: prod
    ? (pageData, ctx) => {
      const site = resolveSiteDataByRoute(
        ctx.siteConfig.site,
        pageData.relativePath
      )
      const title = `${pageData.title || site.title} | ${pageData.description || site.description}`
      ;((pageData.frontmatter.head ??= [])).push(
        ['meta', { property: 'og:locale', content: site.lang }],
        ['meta', { property: 'og:title', content: title }]
      )
    }
    : undefined
});
