<script setup>
import { RouterLink } from 'vue-router'

const menuItems = [
  {
    name: 'Employment History',
    to: '#EmploymentHistory',
    isRouter: false
  },
  {
    name: 'Contact Me',
    to: '#ContactMe',
    isRouter: false
  }
]

const scrollToId = (e) =>
  document.querySelector(e.target.hash).scrollIntoView({
    behavior: 'smooth'
  })
</script>

<template>
  <ul>
    <ol v-for="menuItem in menuItems" :key="menuItem.name" class="font-bold">
      <RouterLink v-if="menuItem.isRouter" :to="menuItem.to">{{ menuItem.name }}</RouterLink>
      <a v-else :href="menuItem.to" :ref="menuItem.refName" @click.prevent="scrollToId">{{
        menuItem.name
      }}</a>
    </ol>
  </ul>
</template>
