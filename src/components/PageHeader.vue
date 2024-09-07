<script setup>
import { RouterLink } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <header class="w-full bg-beige-500 h-24 mb-10">
    <div class="max-w-[1440px] min-w-[320px] h-full mx-auto px-24 flex justify-between items-center">
      <RouterLink class="text-2xl font-bold" to="/">Matt Flynn</RouterLink>
      <NavMenu />
    </div>
  </header>
</template>
