import Joi from 'joi';

export const employeeValidationSchema = Joi.object({
    fullName : Joi.string().required().messages({
        'string.base' : ' Full name must be a string',
        'any.required' : 'Full name is required'
    }),

    email:Joi.string().email().required().messages({
        'string.base' : 'Email must be a string',
        'string.email' : 'Email must be a valid email',
        'any.required' : 'Email is required'
    }),
    designation : Joi.string().required().messages({
        'string.base' : 'Designation must be a string',
        'any.required' : 'Designation is required',
    }),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
        'string.pattern.base' : 'Phone number must be a 10-digit number',
        'any.required' : 'Phone number is required'
    }),
    employmentType : Joi.string().valid('Full-time','Part-time').required().messages({
        'any.only' : 'Employment type must be eiter Full-time or Part-time',
        'any.required' : 'Employment type is required'
    })
})