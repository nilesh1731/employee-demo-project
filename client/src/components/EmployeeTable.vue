<template>
  <v-card>
    <v-card-title>
      <v-icon class="me-2">mdi-account-group</v-icon>
      Employee Directory
    </v-card-title>
    <v-divider></v-divider>
    
      <v-text-field
    v-model="searchQuery"
    label="Search employees..."
    variant="outlined"
    density="comfortable"
    prepend-inner-icon="mdi-magnify"
    clearable
    class="mb-4"
    hide-details
    @update:modelValue="handleSearch"
  />


    <!-- Data Table -->
    <v-data-table
      :headers="headers"
      :items="employeeStore.employees"
      :loading="employeeStore.loading"
      loading-text="Loading employees..."
      no-data-text="No employees found"
    >
      <!-- Employment Type Chip -->
      <template v-slot:item.employmentType="{ item }">
        <v-chip :color="item.employmentType === 'Full-time' ? 'green' : 'orange'">
          {{ item.employmentType }}
        </v-chip>
      </template>

      <!-- Action Buttons -->
      <template v-slot:item.actions="{ item }">
        <div class = 'ga-4'>
          <v-btn
            icon
            size="small"
            color="primary"
            :to="{ name: 'edit-employee', params: { id: item._id } }"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            size="small"
            color="error"
            @click="deleteEmployee(item._id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEmployeeStore } from '@/stores/employee'

const employeeStore = useEmployeeStore()
const searchQuery = ref('')

// Table headers
const headers = [
  { title: 'Name', key: 'fullName' },
  { title: 'Email', key: 'email' },
  { title: 'Designation', key: 'designation' },
  { title: 'Phone', key: 'phone' },
  { title: 'Employment Type', key: 'employmentType' },
  { title: 'Actions', key: 'actions', sortable: false }
]

// Initial fetch
onMounted(() => {
  employeeStore.fetchEmployees()
})

// Search handler
function handleSearch() {
  employeeStore.fetchEmployees(searchQuery.value)
}

// Delete handler
async function deleteEmployee(id) {
  if (confirm('Are you sure you want to delete this employee?')) {
    try {
      await employeeStore.deleteEmployee(id)
    } catch (error) {
      console.error('Failed to delete employee:', error)
    }
  }
}
</script>