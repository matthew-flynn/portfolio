<script setup>
import ButtonWrapper from '@/components/ui/ButtonWrapper.vue'
import IconStrava from '@/components/icons/IconStrava.vue'
import IconGoodreads from '@/components/icons/IconGoodreads.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconGithub from '@/components/icons/IconGithub.vue'

const links = [
  {
    component: IconGithub,
    to: 'https://github.com/matthew-flynn'
  },
  {
    component: IconLinkedIn,
    to: 'https://www.linkedin.com/in/matthew-flynn-712942113/'
  },
  {
    component: IconStrava,
    to: 'https://www.strava.com/athletes/38051091'
  },
  {
    component: IconGoodreads,
    to: 'https://www.goodreads.com/user/show/55013361-matt'
  }
]
</script>

<template>
  <p class="font-bold text-lg">Follow me at:</p>
  <div class="flex gap-4 pb-6">
    <ButtonWrapper
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
    </ButtonWrapper>
  </div>
</template>
