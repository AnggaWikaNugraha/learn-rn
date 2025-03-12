import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .email('Email tidak valid')
    .required('Email wajib diisi'),
  password: yup
    .string()
    .min(6, 'Password minimal 6 karakter')
    .required('Password wajib diisi'),
});

export type ISchema = yup.InferType<typeof schema>;
