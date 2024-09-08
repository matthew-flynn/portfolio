<script setup>
const emailAddress = 'contact@mattflynn.dev'
</script>

<template>
  <p class="font-bold text-lg">Email me at:</p>
  <a class="inline-block pb-4" :href="`mailto:${emailAddress}`">{{ emailAddress }}</a>
</template>
