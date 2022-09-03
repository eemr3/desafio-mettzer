import React from 'react';
import FormLogin from '../components/FormLogin';

function Login() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Entre com sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Cadastre agora mesmo!
            </a>
          </p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
