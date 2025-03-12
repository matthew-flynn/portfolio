<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <p
    class="rounded-full border-2 border-black shadow px-4 bg-lightblue-500 font-bold"
  >
    {{ props.text }}
  </p>
</template>
