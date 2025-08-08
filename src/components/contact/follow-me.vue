<script setup lang="ts">
import ButtonWrapper from '@/components/ui/button-wrapper.vue'
import { links } from '@/data/social-media'
</script>

<template>
  <p class="font-bold text-lg">Follow me at:</p>
  <div class="flex gap-4 pb-6">
    <button-wrapper
      v-for="link in links"
      :key="link.to"
      class="w-10 h-10 !rounded-full bg-yellow-500 !p-0"
    >
      <a
        :href="link.to"
        target="_blank"
        class="h-full w-full flex items-center justify-center"
      >
        <component
          class="h-[65%] w-[65%]"
          :is="link.component"
        ></component>
      </a>
    </button-wrapper>
  </div>
</template>
