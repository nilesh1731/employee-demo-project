<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $t('appTitle') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
      <v-btn icon @click="toggleLocale">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          link
        >
         <v-icon class="me-2">{{ item.icon }}</v-icon>

          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>

    <v-footer app color="primary" dark>
      <span class="text-caption">{{ $t('footerText') }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()
    const theme = useTheme()
    const drawer = ref(false)

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

