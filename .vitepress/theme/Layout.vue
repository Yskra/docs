<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {inBrowser, useData, useRouter} from 'vitepress'
import {watch} from 'vue'
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

      go(`${getUserLocale()}${route.path}${route.hash}`)
    },
    { immediate: true }
)

watch(() => route.path === '/', (isRoot) => {
  if (isRoot) {
    go(getUserLocale())
  }
}, { immediate: true })

function getUserLocale() {
  if (!inBrowser) {
    return locales[0]
  }
  const userLocale = document.cookie.match(/lang=(\w+)/)?.[1]

  return locales.includes(userLocale) ? userLocale : locales[0]
}
</script>

<template>
  <DefaultTheme.Layout />
</template>
