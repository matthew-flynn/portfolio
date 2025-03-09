<script setup>
import PageHeader from '@/components/header/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <PageHeader />
  <div class="h-full">
    <RouterView />
  </div>
</template>
