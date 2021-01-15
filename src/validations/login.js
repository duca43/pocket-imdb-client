import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format!')
        .max(255, 'Email is too long!')
  });