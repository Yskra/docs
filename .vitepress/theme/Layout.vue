<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData, useRouter } from 'vitepress'
import { watch } from 'vue'
import localesCfg from '../locales.js';

const { page, lang } = useData();
const { go, route } = useRouter();
const locales = Object.keys(localesCfg);
const startWithLocaleRegex = new RegExp(`^/?${locales.join('|')}/`);

watch(lang, (lang) => {
  if (inBrowser) {
    document.cookie = `lang=${lang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
watch(() => page.value.isNotFound, (isNotFound) => {
      if (!isNotFound || !inBrowser) {
        return;
      }
      if (startWithLocaleRegex.test(route.path)) {
        return;
      }
      const userLocale = document.cookie.match(/lang=(\w+)/)?.[0]
      const locale = locales.includes(userLocale) ? userLocale : locales[0]

      go(`${locale}/${route.path}${route.hash}`)
    },
    { immediate: true }
)
</script>

<template>
  <DefaultTheme.Layout />
</template>
