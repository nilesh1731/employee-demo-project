<template>
  <v-container
    class="fill-height d-flex align-center justify-center "
    fluid
   
  >
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="pa-6 elevation-3">
          <v-card-title class="text-h5 mb-4">
            <v-icon class="me-2">mdi-account-plus</v-icon>
            {{ $t('form.addTitle') }}
          </v-card-title>

          <employee-form
            @submit="handleSubmit"
            @cancel="handleCancel"
          />
        </v-card>
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
  try {
    await employeeStore.addEmployee(employeeData)
    router.push({ name: 'dashboard' })
  } catch (error) {
    console.error('Error adding employee:', error)
  }
}

function handleCancel() {
  router.push({ name: 'dashboard' })
}
</script>