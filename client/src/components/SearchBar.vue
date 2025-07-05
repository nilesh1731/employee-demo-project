<template>
  <v-text-field
    v-model="searchQuery"
    :label="$t('search.label')"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    @update:model-value="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const emit = defineEmits(['search'])

function handleSearch() {
  emit('search', searchQuery.value)
}
</script>

