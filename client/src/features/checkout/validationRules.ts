import * as yup from 'yup';

export const ValidationRules = [
    yup.object({
        firstName: yup.string().required('Fist name is required'),
        lastName: yup.string().required('Last name is required'),
        address1: yup.string().required('Address1 is required'),
        address2: yup.string().optional(),
        city: yup.string().required('City name is required'),
        state: yup.string().required('State name is required'),
        zip: yup.string().required('Zip is required'),
        country: yup.string().required('Country name is required'),
    }),
    yup.object(),
    yup.object({
        cardName: yup.string().required(),
        cardNumber: yup.string().required(),
        expDate: yup.string().required(),
        cvv: yup.string().required()
    })
]