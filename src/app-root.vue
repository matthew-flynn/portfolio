<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenu from './components/menu/side-menu.vue'
</script>

<template>
  <side-menu />
  <div class="h-full">
    <router-view />
  </div>
</template>
