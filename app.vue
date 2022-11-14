<script setup lang="ts">
  const app = useAppConfig();
  const { localeSetting, initLang } = useLocaleUserSetting();

  initLang();
  useHead({
    title: app.name,
    titleTemplate: "%s - Nuxt 3 Starter",
  });
</script>

<template>
  <Html :lang="localeSetting">
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator
          :height="5"
          :duration="3000"
          :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
