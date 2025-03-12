<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menuItems = [
  {
    name: 'Employment History',
    to: '#EmploymentHistory',
    isRouter: false,
  },
  {
    name: 'Contact Me',
    to: '#ContactMe',
    isRouter: false,
  },
]

const scrollToId = (e: Event) => {
  const target = e.target as HTMLAnchorElement

  if (!target.hash) return

  document.querySelector(target.hash)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <ul>
    <ol
      v-for="menuItem in menuItems"
      :key="menuItem.name"
      class="font-bold"
    >
      <RouterLink
        v-if="menuItem.isRouter"
        :to="menuItem.to"
      >
        {{ menuItem.name }}
      </RouterLink>
      <a
        v-else
        :href="menuItem.to"
        @click.prevent="(e) => scrollToId(e)"
      >
        {{ menuItem.name }}
      </a>
    </ol>
  </ul>
</template>
