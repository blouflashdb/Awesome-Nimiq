<template>
  <header>
    <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1>
    <form>
      <label for="locale-select">{{ $t("language") }}: </label>
      <select
        id="locale-select"
        v-model="localeSetting">
        <option value="en">en</option>
        <option value="de">de</option>
      </select>
    </form>
  </header>
</template>

<script lang="ts" setup>
  const localeSetting = useState<string>("locale");
</script>
