<script lang="ts" setup>
  import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
  const { locales, setLocale } = useI18n();

  const availableLanguages: LocaleObject[] = locales.value as LocaleObject[];
</script>
<template>
  <a
    href="#"
    v-for="locale in availableLanguages"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
    >{{ $t(locale.name!) }}</a
  >
</template>
