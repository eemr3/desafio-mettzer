import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';
import ButtonFavorite from './ButtonFavorite';

function Table({ articles, favorites }) {
  const location = useLocation();
  const { isLoading } = useContext(AppContext);

  if (isLoading && location.pathname === '/home') {
    return (
      <div
        data-testid="isloading-home"
        className="flex justify-center items-center h-screen"
        role="status"
      >
        <>
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </>
      </div>
    );
  }

  return (
    <div data-testid="table-article">
      <div className="lg:w-11/12 m-auto">
        <div className="w-full">
          <div className="lg:max-w-full m-0 overflow-x-auto">
            <table className="m-0 table-auto w-full">
              <thead>
                <tr className="bg-cyan-800 text-center">
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Autor
                  </th>
                  <th className="w-1/12 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Tipo
                  </th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Titulo
                  </th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Descrição
                  </th>
                  <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Urls
                  </th>
                  <th className="w-1/12 min-w-[160px] text-lg font-semibold text-white py-3 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                    Favoritar
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((item) => (
                  <tr key={uuidv4()}>
                    <td className="max-w-xs text-center truncate text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.authors.slice(0, 2).map((aut, ind) => (
                        <span key={uuidv4()}>{aut}</span>
                      ))}
                    </td>
                    <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item._type}
                    </td>
                    <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.title}
                    </td>
                    <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.description}
                    </td>
                    <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      {item.urls.slice(0, 2).map((url, ind) => (
                        <a
                          className="mr-2"
                          key={uuidv4()}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link-{ind + 1}
                        </a>
                      ))}
                    </td>
                    <td className="flex justify-center text-center max-w-md  py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                      <ButtonFavorite
                        favData={item.id}
                        checked={favorites.some((t) => t.id === Number(item.id))}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
