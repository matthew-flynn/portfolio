<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavMenu from '@/components/header/nav-menu.vue'
</script>

<template>
  <header class="w-full bg-beige-500 h-24">
    <div
      class="max-w-[1440px] min-w-[320px] h-full mx-auto px-24 flex justify-between items-center"
    >
      <router-link
        class="text-2xl font-bold"
        to="/"
      >
        Matthew Flynn
      </router-link>
      <nav-menu />
    </div>
  </header>
</template>
