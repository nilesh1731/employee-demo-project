<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-progress-circular v-if="loading" indeterminate color="primary" size="64" class="ma-12" />
        <v-alert v-else-if="notFound" type="error">Employee not found.</v-alert>
        <v-card v-else class="pa-6">
          <v-card-title class="text-h5 mb-4">
            {{ $t('form.editTitle') }}
          </v-card-title>
          <employee-form
            :employee="employee"
            :is-edit="true"
            @submit="handleSubmit"
            @cancel="handleCancel"
            :loading="employeeStore.loading"
          />
          <v-alert v-if="errorMessage" type="error" class="mt-4">
            {{ errorMessage }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
const loading = ref(true)
const notFound = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const data = await employeeStore.fetchEmployee(route.params.id)
    if (!data || !data.data) {
      notFound.value = true
    } else {
      // Map backend fields to form fields
      employee.value = {
        fullName: data.data.fullName,
        email: data.data.email,
        designation: data.data.designation,
        phoneNumber: data.data.phone || data.data.phoneNumber,
        employmentType: data.data.employmentType
      }
    }
  } catch (error) {
    notFound.value = true
    errorMessage.value = 'Failed to load employee data. Please try again.'
    setTimeout(() => {
      router.push({ name: 'dashboard' })
    }, 2000)
  } finally {
    loading.value = false
  }
})

async function handleSubmit(updatedData) {
  errorMessage.value = ''
  try {
    await employeeStore.updateEmployee(route.params.id, {
      ...updatedData,
      phone: updatedData.phoneNumber // ensure backend gets correct field
    })
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