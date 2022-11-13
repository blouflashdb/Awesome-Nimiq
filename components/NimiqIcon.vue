<template>
  <svg class="nq-icon">
    <use :xlink:href="href" />
  </svg>
</template>

<script lang="ts" setup>
  import iconUrl from "@nimiq/style/nimiq-style.icons.svg?url";

  const props = defineProps<{ iconName: string }>();
  const href = computed(() => `${iconUrl}#${props.iconName}`);
</script>
