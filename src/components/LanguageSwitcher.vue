<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      currentLanguage: 'pt',
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    },
  },
  mounted() {
    this.$i18n.locale = 'pt'
    document.documentElement.lang = this.$i18n.locale
    document.title = this.$t('title')
  },
  watch: {
    '$i18n.locale'(newLocale) {
      document.documentElement.lang = newLocale
      document.title = this.$t('title')
    },
  },
}
</script>

<template>
  <div class="flex items-center gap-2">
    <select
      id="language-select"
      v-model="currentLanguage"
      @change="changeLanguage(currentLanguage)"
      class="border py-2 px-4 rounded"
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  </div>
</template>
