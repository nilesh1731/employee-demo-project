<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <employee-form
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import EmployeeForm from '@/components/EmployeeForm.vue'
import { useEmployeeStore } from '@/stores/employee'
import { useRouter } from 'vue-router'

const employeeStore = useEmployeeStore()
const router = useRouter()

async function handleSubmit(employeeData) {
  await employeeStore.addEmployee(employeeData)
  router.push({ name: 'dashboard' })
}

function handleCancel() {
  router.push({ name: 'dashboard' })
}
</script>