import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ButtonFavorite from './ButtonFavorite';

function Table() {
  const { articles } = useContext(AppContext);

  return (
    <div>
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
                {articles.length === 0 ? (
                  <tr>
                    <td>
                      <span>Loading...</span>
                    </td>
                  </tr>
                ) : (
                  articles.map((item) => (
                    <tr key={item._source.id}>
                      <td className="max-w-xs text-center truncate text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {item._source.authors.slice(0, 2).map((aut, ind) => (
                          <span key={`${item.id}-${aut}__${ind}`}>{aut}</span>
                        ))}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {item._type}
                      </td>
                      <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {item._source.title}
                      </td>
                      <td className="max-w-sm truncate text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {item._source.description}
                      </td>
                      <td className="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        {item._source.urls.slice(0, 2).map((url, ind) => (
                          <a
                            className="mr-2"
                            key={`${url}-${item.id}`}
                            href={url}
                            target="_blank"
                            rel="noreferrer">
                            Link-{ind + 1}
                          </a>
                        ))}
                      </td>
                      <td className="flex justify-center text-center max-w-md  py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                        <ButtonFavorite />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
