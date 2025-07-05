<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <employee-form
          :employee="employee"
          :is-edit="true"
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEmployeeStore } from '@/stores/employee'
import EmployeeForm from '@/components/EmployeeForm.vue'

const route = useRoute()
const router = useRouter()
const employeeStore = useEmployeeStore()

const employee = computed(() => 
  employeeStore.employees.find(emp => emp.id === parseInt(route.params.id))
)

async function handleSubmit(updatedData) {
  await employeeStore.updateEmployee(parseInt(route.params.id), updatedData)
  router.push({ name: 'dashboard' })
}

function handleCancel() {
  router.push({ name: 'dashboard' })
}
</script>