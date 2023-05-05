import React from 'react';
import PropTypes from 'prop-types';
import PaginationItems from './PaginationItems';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';

const PaginationLayout = ({ className, totalPage, currentPage }) => {
  const PAGINATION_COUNT = 5;
  const PERIOD = 3;
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (page) => {
    const params = queryString.parse(location.search);
    navigate(
      `${location.pathname}?${queryString.stringify(
        { ...params, page },
        {
          arrayFormat: 'bracket',
          skipEmptyString: true,
          skipNull: true,
        }
      )}`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search]);

  return (
    totalPage !== 1 && (
      <div className={className}>
        <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 space-x-reverse my-20 justify-center">
          <li className="inline-flex">
            <button
              disabled={currentPage === 1 ? true : false}
              onClick={() => handleNavigate(currentPage - 1)}
              className="disabled:opacity-20 disabled:hover:fill-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="hover:fill-rose-500 transition-all duration-300 "
              >
                <path d="M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z"></path>
              </svg>
            </button>
          </li>
          {currentPage < PAGINATION_COUNT ? (
            <>
              {[...Array(PAGINATION_COUNT)].map((_, index) => (
                <PaginationItems
                  key={index}
                  page={index + 1}
                  currentPage={currentPage}
                />
              ))}
              {totalPage > PAGINATION_COUNT && (
                <>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </li>
                  <PaginationItems
                    page={totalPage}
                    currentPage={currentPage}
                  />
                </>
              )}
            </>
          ) : currentPage > totalPage - PAGINATION_COUNT &&
            currentPage <= totalPage ? (
            <>
              <PaginationItems page={1} currentPage={currentPage} />
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    fill="#000"
                  ></path>
                </svg>
              </li>
              {[...Array(PAGINATION_COUNT)].map((_, index) => (
                <PaginationItems
                  key={index}
                  page={totalPage - (PAGINATION_COUNT - (index + 1))}
                  currentPage={currentPage}
                />
              ))}
            </>
          ) : (
            <>
              <PaginationItems page={1} currentPage={currentPage} />
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    fill="#000"
                  ></path>
                </svg>
              </li>
              {[...Array(PAGINATION_COUNT)].map((_, index) => (
                <PaginationItems
                  key={index}
                  page={currentPage + (index + 1 - PERIOD)}
                  currentPage={currentPage}
                />
              ))}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    fill="#000"
                  ></path>
                </svg>
              </li>
              <PaginationItems
                page={totalPage}
                currentPage={currentPage}
              />
            </>
          )}
          <li className="inline-flex">
            <button
              disabled={currentPage === totalPage ? true : false}
              onClick={() => handleNavigate(currentPage + 1)}
              className="disabled:opacity-20 disabled:hover:fill-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="hover:fill-rose-500 transition-all duration-300"
              >
                <path d="M4.83594 12.0001L11.043 18.2072L12.4573 16.793L7.66436 12.0001L12.4573 7.20718L11.043 5.79297L4.83594 12.0001ZM10.4858 12.0001L16.6929 18.2072L18.1072 16.793L13.3143 12.0001L18.1072 7.20718L16.6929 5.79297L10.4858 12.0001Z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    )
  );
};

PaginationLayout.propTypes = {
  className: PropTypes.string,
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  query: PropTypes.object,
};

export default PaginationLayout;
