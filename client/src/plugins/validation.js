import {defineRule, configure} from 'vee-validate';
import { required,email } from '@vee-validate/rules';
import {localize,setLocale} from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';

// Define validation rules
defineRule('required', required);
defineRule('email', email);

// Configure vee- validate

configure({
    generateMessage: localize({ en})
})

setLocale('en');