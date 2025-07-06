<template>
  <v-card  class="text-white">
 
    <v-card-text>
      <div class="d-flex align-center">
        <v-icon size="48" class="mr-4" :color="color"  >{{ icon }}</v-icon>
        <div>
          
          <div class="text-h6">{{ title }}</div>
          <div class="text-h4 font-weight-bold" :color="color">{{ value }}</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    default: 'mdi-chart-bar'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>