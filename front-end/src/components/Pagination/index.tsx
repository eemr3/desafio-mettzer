import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';

const MAX_ITEMS = 10;
type PaginationProps = {
  limit: number;
  total: number;
  offset: number;
  setOffset: (value: number) => void;
};

const Pagination = ({ limit, total, offset, setOffset }: PaginationProps) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);

  const onPageChange = (page: number) => {
    const navPage = (page - 1) * limit;
    setOffset(navPage === 0 ? 1 : navPage);
  };

  const generatePageNumbers = () => {
    const paginationNumber = Array.from({ length: Math.min(MAX_ITEMS, pages) }).map(
      (_, index) => index + 1,
    );
    return paginationNumber;
  };

  return (
    <div
      className="container flex items-center justify-between border-t mx-auto
     border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div></div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={Math.floor(currentPage) === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {generatePageNumbers().map((page) => (
              <button
                key={uuidv4()}
                onClick={() => onPageChange(page)}
                disabled={page === Math.floor(currentPage)}
                className={
                  page === Math.floor(currentPage)
                    ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'relative z-10 inline-flex items-center bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                }
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === pages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 
              text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 
              focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

// <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm">
//   {generatePageNumbers().map((page) => (
//     <li key={uuidv4()}>
//       <button
//         disabled={page === Math.floor(currentPage)}
//         className={
//           page === Math.floor(currentPage)
//             ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//             : 'relative z-10 inline-flex items-center bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//         }
//         onClick={() => onPageChange(page)}
//       >
//         {page}
//       </button>
//     </li>
//   ))}
// </ul>
