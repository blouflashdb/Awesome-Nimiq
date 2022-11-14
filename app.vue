<script setup lang="ts">
  const app = useAppConfig();
  const localeUserSetting = useLocaleUserSetting();

  useHead({
    title: app.name,
    titleTemplate: "%s - Nuxt 3 Starter",
  });
</script>

<template>
  <Html :lang="localeUserSetting">
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
