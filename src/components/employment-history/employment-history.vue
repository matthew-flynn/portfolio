<script setup lang="ts">
import ButtonWrapper from '@/components/ui/button-wrapper.vue'
import TechnologyPill from '@/components/employment-history/technology-pill.vue'
import { type EmploymentHistory } from '@/data/employment-history.ts'

const props = defineProps<{
  employmentHistory: EmploymentHistory
}>()
</script>

<template>
  <button-wrapper class="bg-beige-500 text-left">
    <a
      :href="props.employmentHistory.companyUrl"
      target="_blank"
    >
      <h3 class="font-bold text-2xl">{{ props.employmentHistory.jobTitle }}</h3>
      <p class="mb-2">
        <span class="font-bold">{{ props.employmentHistory.company }}</span>
        &#8226;
        <span>
          {{ props.employmentHistory.timeframe.start }} -
          {{ props.employmentHistory.timeframe.end }}
        </span>
      </p>
      <p class="mb-4">
        {{ props.employmentHistory.description }}
      </p>
      <div class="flex gap-2 flex-wrap mb-2">
        <technology-pill
          v-for="technology in props.employmentHistory.technologies"
          :key="technology"
          :text="technology"
        />
      </div>
    </a>
  </button-wrapper>
</template>
