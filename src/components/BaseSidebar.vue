<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import { Transition } from 'vue'

export default {
  name: 'BaseSidebar',
  components: {
    LanguageSwitcher,
    Transition,
  },
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    },
  },
}
</script>

<template>
  <div>
    <button @click="toggleSidebar" class="sm:hidden p-2">
      <span class="sr-only">Toggle Sidebar</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
    <aside
      :class="[
        'fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50  transition-transform transform',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'sm:translate-x-0 sm:static sm:inset-auto',
      ]"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              to="/"
              class="block px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-200"
              @click="closeSidebar"
            >
              {{ $t('sidebar.home') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/login"
              class="block px-4 py-2 text-gray-900 rounded-lg hover:bg-gray-200"
              @click="closeSidebar"
            >
              {{ $t('sidebar.login') }}
            </router-link>
          </li>
        </ul>
        <div class="mt-6">
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
    <Transition name="fade">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black opacity-10 z-30 sm:hidden"
        @click="toggleSidebar"
      ></div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
