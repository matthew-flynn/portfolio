<script setup lang="ts">
import EmploymentHistory from '@/components/employment-history/employment-history.vue'
import { employmentHistory } from '@/data/employment-history'
</script>

<template>
  <div class="max-w-[1440px] min-w-[320px] mx-auto px-6 md:px-24">
    <h1
      id="EmploymentHistory"
      class="font-bold text-5xl mb-4"
    >
      Employment History
    </h1>
    <div class="flex flex-col gap-4 pb-4">
      <employment-history
        v-for="history in employmentHistory"
        :key="history.jobTitle"
        :employment-history="history"
        class="pb-2"
      />
    </div>
  </div>
</template>
