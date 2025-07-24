<script setup lang="ts">
import EmailMe from '@/components/contact/email-me.vue'
import FollowMe from '@/components/contact/follow-me.vue'
</script>

<template>
  <div class="max-w-[1440px] min-w-[320px] mx-auto pt-4 px-6 md:px-24">
    <h1
      id="ContactMe"
      class="font-bold text-5xl mb-4"
    >
      Contact Me
    </h1>
    <email-me />
    <follow-me />
  </div>
</template>
