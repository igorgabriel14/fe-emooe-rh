<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      currentLanguage: this.getSavedLanguage() || 'pt',
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('language', lang)
    },
    getSavedLanguage() {
      return localStorage.getItem('language')
    },
  },
  mounted() {
    const savedLanguage = this.getSavedLanguage()
    if (savedLanguage) {
      this.changeLanguage(savedLanguage)
    } else {
      this.changeLanguage(this.currentLanguage)
    }
  },
  watch: {
    '$i18n.locale'(newLocale) {
      document.documentElement.lang = newLocale
      document.title = this.$t('title')
      this.currentLanguage = newLocale
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
