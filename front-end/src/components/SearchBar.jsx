import { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../context/AppContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SearchBar({ isRender }) {
  const history = useHistory();
  const { setQuery, inputChange, setInputChange } = useContext(AppContext);
  const signOut = () => {
    Cookies.remove('token');
    history.push('/login');
  };

  const handleSearch = () => {
    setQuery(inputChange);
  };

  return (
    <Disclosure as="nav" data-testid="navbar-test" className="bg-gray-800 mb-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {isRender ? (
                      <>
                        <input
                          className="p-1 mr-1 rounded"
                          type="text"
                          name="search"
                          value={inputChange}
                          placeholder="Digite sua busca"
                          onChange={(e) => setInputChange(e.target.value)}
                        />
                        <button
                          className="lg:ml-4 p-1 w-28 rounded bg-slate-100 text-zinc-900"
                          type="button"
                          onClick={handleSearch}>
                          Buscar
                        </button>
                      </>
                    ) : (
                      <Link to="/home" className="text-white">
                        Home
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      data-testid="menu-profile"
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Abrir menu de usuario</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/favorites"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}>
                            Meus favoritos
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={signOut}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                            )}>
                            Sair
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {isRender ? (
                <>
                  <input
                    className="p-1 mr-1 rounded"
                    type="text"
                    name="search"
                    value={inputChange}
                    onChange={(e) => setInputChange(e.target.value)}
                  />
                  <button
                    className="lg:ml-4 p-1 w-28 rounded bg-slate-100 text-zinc-900"
                    type="button"
                    onClick={handleSearch}>
                    Buscar
                  </button>
                </>
              ) : (
                <Link to="/home" className="text-white">
                  Home
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
