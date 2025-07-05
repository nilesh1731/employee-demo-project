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