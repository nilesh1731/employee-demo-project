<template>
  <v-container>
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <h1 class="text-h4">{{ $t('dashboard.title') }}</h1>
      </v-col>
      <v-col cols="12" md="6" class="text-md-right">
        <v-btn
          color="primary"
          :to="{ name: 'add-employee' }"
          prepend-icon="mdi-account-plus"
        >
          {{ $t('dashboard.addEmployee') }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <search-bar @search="handleSearch" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.totalEmployees')"
          :value="totalEmployees"
          icon="mdi-account-group"
          color="primary"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.fullTime')"
          :value="fullTimeEmployees"
          icon="mdi-briefcase"
          color="green"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <stat-card
          :title="$t('dashboard.partTime')"
          :value="totalEmployees - fullTimeEmployees"
          icon="mdi-clock"
          color="orange"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
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
import { computed, onMounted } from 'vue'
import { useEmployeeStore } from '@/stores/employee'
import EmployeeTable from '@/components/EmployeeTable.vue'
import SearchBar from '@/components/SearchBar.vue'
import StatCard from '@/components/StatCard.vue'

const employeeStore = useEmployeeStore()
const searchQuery = ref('')

onMounted(() => {
  employeeStore.fetchEmployees()
})

const filteredEmployees = computed(() => employeeStore.employees)
const totalEmployees = computed(() => employeeStore.totalEmployees)
const fullTimeEmployees = computed(() => employeeStore.fullTimeEmployees)
const loading = computed(() => employeeStore.loading)

function handleSearch(query) {
  employeeStore.fetchEmployees(query)
}

async function handleDelete(id) {
  if (confirm('Are you sure you want to delete this employee?')) {
    try {
      await employeeStore.deleteEmployee(id)
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  }
}
</script>
