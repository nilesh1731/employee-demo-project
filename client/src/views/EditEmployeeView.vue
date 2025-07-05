<template>
  
    <v-row justify="center">
      <v-col cols="20" md="10" lg="20">
        <v-card v-if="employee" class="pa-6">
          
          
          <employee-form
            :employee="employee"
            :is-edit="true"
            @submit="handleSubmit"
            @cancel="handleCancel"
            :loading="employeeStore.loading"
          />
          
          <v-alert
            v-if="errorMessage"
            type="error"
            class="mt-4"
          >
            {{ errorMessage }}
          </v-alert>
        </v-card>
        
        <v-progress-circular
          v-else
          indeterminate
          color="primary"
          size="64"
          class="ma-12"
        ></v-progress-circular>
      </v-col>
    </v-row>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useEmployeeStore } from '@/stores/employee'
import EmployeeForm from '@/components/EmployeeForm.vue'

const route = useRoute()
const router = useRouter()
const employeeStore = useEmployeeStore()

const employee = ref(null)
const errorMessage = ref('')

onMounted(async () => {
  try {
    employee.value = await employeeStore.fetchEmployee(route.params.id)
  } catch (error) {
    console.error('Error fetching employee:', error)
    errorMessage.value = 'Failed to load employee data. Please try again.'
    setTimeout(() => {
      router.push({ name: 'dashboard' })
    }, 2000)
  }
})

async function handleSubmit(updatedData) {
  errorMessage.value = ''
  try {
    await employeeStore.updateEmployee(route.params.id, updatedData)
    router.push({ 
      name: 'dashboard',
      query: { updated: 'true' }
    })
  } catch (error) {
    console.error('Error updating employee:', error)
    errorMessage.value = 'Failed to update employee. Please check your data and try again.'
  }
}

function handleCancel() {
  router.push({ name: 'dashboard' })
}
</script>

