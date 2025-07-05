// src/plugins/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    appTitle: "Employee Directory",
    footerText: "© 2025 Employee Management System",
    nav: {
      home: "Dashboard",
      addEmployee: "Add Employee"
    },
    dashboard: {
      title: "Employee Dashboard",
      addEmployee: "Add New Employee",
      totalEmployees: "Total Employees",
      fullTime: "Full-time",
      partTime: "Part-time"
    },
    form: {
      addTitle: "Add New Employee",
      editTitle: "Edit Employee",
      fullName: "Full Name",
      email: "Email",
      designation: "Designation",
      phoneNumber: "Phone Number",
      employmentType: "Employment Type",
      fullTime: "Full-time",
      partTime: "Part-time",
      submit: "Submit",
      cancel: "Cancel"
    },
    table: {
      title: "Employee List"
    },
    search: {
      label: "Search employees..."
    }
  },
  es: {
    appTitle: "Directorio de Empleados",
    footerText: "© 2025 Sistema de Gestión de Empleados",
    nav: {
      home: "Panel",
      addEmployee: "Agregar Empleado"
    },
    dashboard: {
      title: "Panel de Empleados",
      addEmployee: "Agregar Empleado",
      totalEmployees: "Total de Empleados",
      fullTime: "Tiempo Completo",
      partTime: "Medio Tiempo"
    },
    form: {
      addTitle: "Agregar Empleado",
      editTitle: "Editar Empleado",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      designation: "Designación",
      phoneNumber: "Número de Teléfono",
      employmentType: "Tipo de Empleo",
      fullTime: "Tiempo Completo",
      partTime: "Medio Tiempo",
      submit: "Enviar",
      cancel: "Cancelar"
    },
    table: {
      title: "Lista de Empleados"
    },
    search: {
      label: "Buscar empleados..."
    }
  }
}

const i18n = createI18n({
  legacy: false,  // Use Composition API mode
  locale: 'en',   // Default language is English
  fallbackLocale: 'en', // If translation is not available in the selected language, fallback to English
  messages // All language strings
})

export default i18n