import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './style.css'

import en from './locales/en.json'
import pt from './locales/pt.json'

const savedLanguage = localStorage.getItem('language') || 'pt'

const i18n = createI18n({
  locale: savedLanguage,
  messages: {
    en,
    pt,
  },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

// Atualiza o atributo lang e o título da página
app.mixin({
  watch: {
    '$i18n.locale'(newLocale) {
      document.documentElement.lang = newLocale
      document.title = this.$t('title')
    },
  },
  mounted() {
    document.documentElement.lang = this.$i18n.locale
    document.title = this.$t('title')
  },
})

app.mount('#app')
