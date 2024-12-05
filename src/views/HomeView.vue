<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'HomeView',
  components: {
    LanguageSwitcher,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div class="m-4">
    <LanguageSwitcher />
    <p class="text-lg">{{ $t('message.hello') }}</p>
  </div>
</template>
