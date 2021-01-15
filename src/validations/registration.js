import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format!')
        .max(255, 'Email is too long!')
        .required('Email is required!'),
    password: Yup.string()
        .min(6, 'Password is too short!')
        .max(128, 'Password is too long!')
        .required('Password is required'),
    name: Yup.string()
        .max(100, 'Name is too long!')
        .required('Name is required!')
  });