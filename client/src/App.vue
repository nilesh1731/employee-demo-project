<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     
      <v-toolbar-title>{{ $t('appTitle') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
      <v-btn icon @click="toggleLocale">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>

    

    <v-main>
      <router-view v-slot="{ Component }">
      </router-view>
    </v-main>

    <v-footer app color="primary" dark>
      <span class="text-caption">{{ $t('footerText') }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const theme = useTheme()
    const drawer = ref(false)

   console.log(`current theme: ${theme.global.current.value.name}`);
   
    

    const navItems = [
      { title: 'nav.home', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'nav.addEmployee', icon: 'mdi-account-plus', to: '/add' }
    ]

    const themeIcon = computed(() => 
      theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
    )

   function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.change(newTheme); 
}

    function toggleLocale() {
      locale.value = locale.value === 'en' ? 'es' : 'en'
    }

    return {
      drawer,
      navItems,
      themeIcon,
      toggleTheme,
      toggleLocale
    }
  }
}
</script>


