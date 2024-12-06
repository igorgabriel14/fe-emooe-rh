<script>
import { RouterView } from 'vue-router'
import BaseSidebar from './components/BaseSidebar.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    BaseSidebar,
  },
}
</script>

<template>
  <div class="flex h-screen">
    <BaseSidebar />
    <RouterView />
  </div>
</template>
