<script setup lang="ts">
import MenuSection from './menu-section.vue'
</script>

<template>
  <div
    class="flex border-b border-beige-500 lg:border-b-none lg:border-r lg:flex-col lg:max-w-72 lg:h-full"
  >
    <menu-section>
      <a
        href="/"
        class="font-semibold font-code text-deep-espresso-500 hover:underline hover:cursor-pointer break-keep"
      >
        matthew-flynn.dev
      </a>
    </menu-section>
    <menu-section class="hidden lg:block">
      I'm Matt, a software development team lead, musician, and runner. This is
      my space to talk about the things I'm doing, software-related and
      otherwise.
    </menu-section>
  </div>
</template>
