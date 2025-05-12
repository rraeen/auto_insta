import * as Yup from 'yup';

export const signUpschema = Yup.object({
    username: Yup.string().min(3, 'Must be at least 3 characters').required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export const forgetPasswordSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});