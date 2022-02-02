import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup.string()
        .required('This field is required, please enter product name')
        .min(4, 'Name must be at least 4 character long')
        .max(50, 'Maximum is 50 characters'),
    brand: yup.string()
        .required('This field is required, please enter product brand')
        .min(1, 'brand field must be at least 1 character long')
        .max(50, 'Maximum is 50 characters'),
    description: yup.string()
        .required('This field is required, please enter product description')
        .min(10, 'description field must be at least 10 character long')
        .max(450, 'Maximum is 450 characters'),
    code: yup.string()
        .required('This field is required, please enter product code')
        .min(4, 'Code must be at least 4 character long')
        .max(20, 'Maximum is 20 characters'),
    price: yup.number()
        .required('Price is required')
        .min(9, 'Minimum price is 9 euros')
        .max(2000, 'Maximum price is 2000 euros')
})