<template>
  <v-container class="d-flex align-center justify-center fill-height" 
  fluid
  
  >
    <Form @submit="handleSubmit" v-slot="{ errors }">
      <v-card class="pa-4 max-w-lg"  >
        <v-card-title class="text-h5">
          {{ isEdit ? $t('form.editTitle') : $t('form.addTitle') }}
        </v-card-title>
        <v-card-text>
          <Field
            v-model="formData.fullName"
            name="fullName"
            :rules="validateName"
            v-slot="{ field, errors: fieldErrors }"
          >
            <v-text-field
              v-bind="field"
              :label="$t('form.fullName')"
              :error-messages="fieldErrors"
              required
            />
          </Field>

          <Field
            v-model="formData.email"
            name="email"
            rules="required|email"
            v-slot="{ field, errors: fieldErrors }"
          >
            <v-text-field
              v-bind="field"
              :label="$t('form.email')"
              :error-messages="fieldErrors"
              required
            />
          </Field>

          <Field
            v-model="formData.designation"
            name="designation"
            rules="required"
            v-slot="{ field, errors: fieldErrors }"
          >
            <v-text-field
              v-bind="field"
              :label="$t('form.designation')"
              :error-messages="fieldErrors"
              required
            />
          </Field>

          <Field
            v-model="formData.phoneNumber"
            name="phoneNumber"
            :rules="validatePhone"
            v-slot="{ field, errors: fieldErrors }"
          >
            <v-text-field
              v-bind="field"
              :label="$t('form.phoneNumber')"
              :error-messages="fieldErrors"
              required
            />
          </Field>

          <Field
            v-model="formData.employmentType"
            name="employmentType"
            rules="required"
            v-slot="{ field }"
          >
            <v-radio-group
              v-bind="field"
              :label="$t('form.employmentType')"
              inline
            >
              <v-radio
                :label="$t('form.fullTime')"
                value="Full-time"
                color="primary"
              />
              <v-radio
                :label="$t('form.partTime')"
                value="Part-time"
                color="secondary"
              />
            </v-radio-group>
          </Field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="cancel">
            {{ $t('form.cancel') }}
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            type="submit"
            :disabled="Object.keys(errors).length > 0"
          >
            {{ $t('form.submit') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </Form>
  </v-container>
</template>


<script setup>
import { Form, Field } from 'vee-validate'
import { ref, watch } from 'vue'

const props = defineProps({
  employee: {
    type: Object,
    default: null
  },
  isEdit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit', 'cancel'])

const formData = ref({
  fullName: '',
  email: '',
  designation: '',
  phoneNumber: '',
  employmentType: 'Full-time'
})

// Pre-fill form if editing
watch(() => props.employee, (newVal) => {
  if (newVal) {
    formData.value = {
      fullName: newVal.fullName,
      email: newVal.email,
      designation: newVal.designation,
      phoneNumber: newVal.phone,
      employmentType: newVal.employmentType
    }
  }
}, { immediate: true })

function validateName(value) {
  if (!value) return 'This field is required'
  if (value.length < 3) return 'Name must be at least 3 characters'
  return true
}

function validatePhone(value) {
  if (!value) return 'This field is required'
  const phoneRegex = /^[0-9]{10,15}$/
  if (!phoneRegex.test(value)) return 'Phone number must be 10-15 digits'
  return true
}

function handleSubmit() {
  emit('submit', formData.value)
}

function cancel() {
  emit('cancel')
}
</script>

<style scoped>
  .fill-height {
    height: 100vh;
    width: 100%;
  }
</style>
