<script setup lang="ts">
import PageHeader from '@/components/header/page-header.vue'
import { RouterView } from 'vue-router'
</script>
scriptTsSetup
<template>
  <page-header />
  <div class="h-full">
    <router-view />
  </div>
</template>
