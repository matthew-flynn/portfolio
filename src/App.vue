<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <PageHeader />
  <div class="h-full max-w-[1440px] min-w-[320px] mx-auto px-24">
    <RouterView />
  </div>
</template>
