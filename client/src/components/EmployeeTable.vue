<template>
  <v-card>
    <v-card-title>
      <v-icon left>mdi-account-group</v-icon>
      {{ $t('table.title') }}
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="employees"
      :loading="loading"
      loading-text="Loading employees..."
      no-data-text="No employees found"
    >
      <template v-slot:item.employmentType="{ item }">
        <v-chip
          :color="item.employmentType === 'Full-time' ? 'green' : 'orange'"
          small
        >
          {{ item.employmentType }}
        </v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          size="small"
          color="primary"
          :to="{ name: 'edit-employee', params: { id: item.id } }"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          size="small"
          color="error"
          @click="$emit('delete', item.id)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
const props = defineProps({
  employees: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['delete'])

const headers = [
  { title: 'Full Name', key: 'fullName' },
  { title: 'Email', key: 'email' },
  { title: 'Designation', key: 'designation' },
  { title: 'Phone', key: 'phone' },
  { title: 'Employment Type', key: 'employmentType' },
  { title: 'Actions', key: 'actions', sortable: false }
]
</script>

