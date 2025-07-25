import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi' 
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', 
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          green: '#4CAF50',
          orange  : '#FF9800',
        }
      },
      dark:{
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          green: '#4CAF50',
          orange  : '#FF9800',
        }
      }
    }
  }
})
