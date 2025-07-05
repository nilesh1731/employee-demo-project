import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/api'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const totalEmployees = computed(() => employees.value.length)
  const fullTimeEmployees = computed(() => 
    employees.value.filter(emp => emp.employmentType === 'Full-time').length
  )

  // Actions
  async function fetchEmployees(searchQuery = '') {
    try {
      loading.value = true
      const params = searchQuery ? { search: searchQuery } : {}
      const response = await api.get('/employees', { params })
      employees.value = response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function fetchEmployee(id) {
    try {
      loading.value = true
      const response = await api.get(`/employees/${id}`)
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function addEmployee(employee) {
    try {
      loading.value = true
      const response = await api.post('/employees', {
        fullName: employee.fullName,
        email: employee.email,
        designation: employee.designation,
        phone: employee.phoneNumber,
        employmentType: employee.employmentType
      })
      employees.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateEmployee(id, updatedData) {
    try {
      loading.value = true
      const response = await api.put(`/employees/${id}`, {
        fullName: updatedData.fullName,
        email: updatedData.email,
        designation: updatedData.designation,
        phone: updatedData.phoneNumber,
        employmentType: updatedData.employmentType
      })
      
      const index = employees.value.findIndex(emp => emp._id === id)
      if (index !== -1) {
        employees.value[index] = response.data
      }
      return response.data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function deleteEmployee(id) {
    try {
      loading.value = true
      await api.delete(`/employees/${id}`)
      employees.value = employees.value.filter(emp => emp._id !== id)
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    employees,
    loading,
    error,
    totalEmployees,
    fullTimeEmployees,
    fetchEmployees,
    fetchEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
  }
})