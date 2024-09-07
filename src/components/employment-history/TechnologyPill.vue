<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="rounded-full border-2 border-black shadow px-4 bg-lightblue-500 font-bold">
    {{ props.text }}
  </p>
</template>
