import * as Yup from 'yup';

export const loginSchema = Yup.object({
    username: Yup.string().min(3, 'Must be at least 3 characters').required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});