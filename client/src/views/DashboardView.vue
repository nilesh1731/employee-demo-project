<template>
  <v-container>
    <!-- Header Row -->
    <v-row class="mb-4 align-center">
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold text-primary">
          {{ $t('dashboard.title') }}
        </h1>
      </v-col>
      <v-col cols="12" md="6" class="text-md-right">
        <v-btn
          color="primary"
          :to="{ name: 'add-employee' }"
          prepend-icon="mdi-account-plus"
          size="large"
          rounded="lg"
        >
          {{ $t('dashboard.addEmployee') }}
        </v-btn>
      </v-col>
    </v-row>

   

    <!-- Stats Cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.totalEmployees')"
          :value="totalEmployees"
          icon="mdi-account-group"
          color="primary"
          :loading="loading"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.fullTime')"
          :value="fullTimeEmployees"
          icon="mdi-briefcase"
          color="green"
          :loading="loading"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.partTime')"
          :value="partTimeEmployees"
          icon="mdi-clock"
          color="orange"
          :loading="loading"
        />
      </v-col>
    </v-row>

    <!-- Employee Table -->
    <v-row>
      <v-col cols="12">
        <v-alert
          v-if="error"
          type="error"
          class="mb-4"
        >
          {{ error }}
        </v-alert>
        
        <employee-table
          :employees="filteredEmployees"
          :loading="loading"
          @delete="handleDelete"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useEmployeeStore } from '@/stores/employee'
import EmployeeTable from '@/components/EmployeeTable.vue'
import StatCard from '@/components/StatCard.vue'

const employeeStore = useEmployeeStore()
const error = ref(null)

// Fetch data on mount
onMounted(async () => {
  try {
    await employeeStore.fetchEmployees()
  } catch (err) {
    error.value = err.message || 'Failed to load employees'
    console.error('Error fetching employees:', err)
  }
})

// Computed properties
const filteredEmployees = computed(() => employeeStore.employees)
const totalEmployees = computed(() => employeeStore.totalEmployees)
const fullTimeEmployees = computed(() => employeeStore.fullTimeEmployees)
const partTimeEmployees = computed(() => totalEmployees.value - fullTimeEmployees.value)
const loading = computed(() => employeeStore.loading)

// Search handler with debounce


// Delete handler
const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this employee?')) {
    try {
      await employeeStore.deleteEmployee(id)
    } catch (err) {
      error.value = err.message || 'Delete failed'
      console.error('Error deleting employee:', err)
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
.v-btn {
  letter-spacing: 0.5px;
}
</style>