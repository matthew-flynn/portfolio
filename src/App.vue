<script setup lang="ts">
import PageHeader from '@/components/header/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>
scriptTsSetup
<template>
  <PageHeader />
  <div class="h-full">
    <RouterView />
  </div>
</template>
