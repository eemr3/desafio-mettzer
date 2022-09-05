import { useContext } from 'react';
import { useFormik } from 'formik';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { ToastContainer } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { FormLoginSchema } from '../schemas/schemas';

export default function FormLogin() {
  const { signIn } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: FormLoginSchema,
    onSubmit: (values) => {
      signIn(values);
    },
  });

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 space-y-6"
        action="#"
        method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Endereço de e-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Endereço de e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-between"></div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
