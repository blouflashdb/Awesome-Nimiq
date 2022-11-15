<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      {{ $t("hello", { name: "vue-i18n" }) }}
    </h1>
    <LanguageSwitcher></LanguageSwitcher>
    <NimiqIcon icon-name="nq-ledger"></NimiqIcon>
  </div>
</template>
