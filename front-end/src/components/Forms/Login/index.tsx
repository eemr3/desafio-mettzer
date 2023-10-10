import { ApolloError, useApolloClient, useMutation } from '@apollo/client';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import { useFormik } from 'formik';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { setCookie } from '../../../common/cookies';
import { SIGNIN } from '../../../lib/mutation';
import { FormLoginSchema } from '../../../schema/form-login.schema';
import { Input } from '../../CustomInput';
import { Form } from '../../template/LayoutForm.';
import { GET_USER } from '../../../lib/query';

export default function FormLogin() {
  const route = useRouter();
  const [showPassword, SetShowPassword] = useState(false);
  const [login] = useMutation(SIGNIN);
  const apolloClient = useApolloClient();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: FormLoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data } = await login({
          variables: {
            data: values,
          },
        });

        setCookie('access_token', data.login.access_token);

        apolloClient.resetStore().then(() => {
          setSubmitting(false);
          route.push('/home');
        });
      } catch (err) {
        const error = err as ApolloError;

        toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <Form.Root>
        <Form.Ilutration image="images/img-login-screen.svg" />
        <Form.Container>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-row items-center justify-center lg:justify-start mb-10">
              <p className="mb-0 mr-4 text-3xl font-medium">Seja bem-vindo!</p>
            </div>
            <div className="flex flex-col gap-y-6">
              <Input.Root className="mt-6">
                <Input.Label
                  text="Endereço de email"
                  htmlFor="email-address"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                />
                <Input.CustomInput
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  id="email-address"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-3
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                        sm:leading-6"
                  placeholder="email@email.com"
                />
                {formik.errors.email && (
                  <span className="text-red-500 text-sm">{formik.errors.email}</span>
                )}
              </Input.Root>
              <Input.Root className="mb-6">
                <Input.Label
                  text="Sua senha"
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                />
                <Input.Password>
                  <Input.CustomInput
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    id="password"
                    type={showPassword === false ? 'password' : 'text'}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-3
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                        sm:leading-6"
                    placeholder="********"
                  />
                  {showPassword === false ? (
                    <EyeSlashIcon
                      onClick={() => SetShowPassword(!showPassword)}
                      className="h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-800"
                    />
                  ) : (
                    <EyeIcon
                      onClick={() => SetShowPassword(!showPassword)}
                      className="h-6 w-6 absolute z-20 mr-2 cursor-pointer text-gray-800"
                    />
                  )}
                </Input.Password>
                {formik.errors.password && (
                  <span className="text-red-500 text-sm">{formik.errors.password}</span>
                )}
              </Input.Root>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] 
                      mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none 
                      rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 
                      outline-none before:pointer-events-none before:absolute before:h-[0.875rem]
                       before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent
                        before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] 
                        checked:border-gray-700 checked:bg-blue-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value="remember"
                  id="exampleCheck2"
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="exampleCheck2"
                >
                  Lembra-me
                </label>
              </div>

              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Esqueceu a senha?
              </a>
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="relative mt-4 bg-blue-600 hover:bg-blue-700 px-2 w-56 py-3 
                    text-white uppercase rounded text-xs tracking-wider flex justify-around"
              >
                <span className="absolute inset-y-0 left-0 flex items-center ml-2">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Faça login na conta
              </button>

              <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Não possui uma conta?{' '}
                <Link
                  className="text-red-600 hover:underline hover:underline-offset-4"
                  href="/signup"
                >
                  Crie a sua conta aqui.
                </Link>
              </div>
            </div>
          </form>
        </Form.Container>
      </Form.Root>
    </>
  );
}
