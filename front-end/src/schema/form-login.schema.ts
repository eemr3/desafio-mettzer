import * as Yup from 'yup';

export const FormLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Entre com um e-mail válido')
    .required('O E-mail é obrigatório!'),
  password: Yup.string()
    .min(6, 'A senha tem que ter pelomenos 6 caracteres')
    .required('A senha é obrigatória!'),
});
