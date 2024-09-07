<script setup>
import EmploymentHistory from '@/components/employment-history/EmploymentHistory.vue'
import { employmentHistory } from '@/data/employment-history'
</script>

<template>
  <h1 id="EmploymentHistory" class="font-bold text-5xl mb-4">Employment History</h1>
  <div class="flex flex-col gap-4 pb-4">
    <EmploymentHistory
      v-for="history in employmentHistory"
      :key="history"
      :employment-history="history"
      class="pb-2"
    />
  </div>
</template>
