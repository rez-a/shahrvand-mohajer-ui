import React, { useState } from 'react';
import Card from './Card';
import Spinner from 'components/shared/Spinner';

const Wallet = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Card title="افزایش موجودی کیف پول">
        <div className="px-4 py-5">
          <form>
            <div className="relative mb-3">
              <input
                className="w-full placeholder:text-xs px-3 py-2 h-10  rounded-md border outline-none focus:border-gray-400"
                type="number"
                id="amount"
                //   value={verifyCode}
                //   onChange={(e) => setVerifyCode(e.target.value)}
                placeholder="مثلا 200,000"
              />
              <span class="bg-gray-100 absolute left-0 top-1/2 ml-1 -translate-y-1/2 text-gray-800 text-sm font-medium px-3 py-1.5 rounded">
                تومان
              </span>
            </div>
            <button
              // disabled={loading}
              // onClick={handleEditProfile}
              className="bg-sky-500/90  text-white w-full sm:w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                {loading && <Spinner />}
                <span className="mr-2">افزایش موجودی</span>
              </div>
            </button>
          </form>
        </div>
      </Card>
      <Card title="تاریخچه کیف پول">
        <div>
          <div class="relative overflow-auto max-h-screen">
            <table class="w-full text-sm text-right text-gray-500 ">
              <thead class="text-sm whitespace-nowrap text-gray-700  bg-gray-100">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    شماره
                  </th>
                  <th scope="col" class="px-6 py-3">
                    تاریخ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    مبلغ
                  </th>
                  <th scope="col" class="px-6 py-3">
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {[...Array(6)].map((walletItem, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b  hover:text-black hover:bg-gray-50/50 transition-all duration-200 "
                  >
                    <td class="px-6 py-4">1</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
                    >
                      تست
                    </th>
                    <td class="px-6 py-4">تست</td>
                    <td class="px-6 py-4 text-black font-bold">
                      {Number(2000).toLocaleString()}
                      <small
                        className="text-slate-700 font-light mr-1
                    "
                      >
                        تومان
                      </small>
                    </td>
                    <td class="px-6 py-4 ">
                      <span
                        className={` font-bold border text-xs  p-2  rounded-md ${
                          false
                            ? 'bg-green-50 border-green-300 text-green-500 '
                            : 'bg-rose-50 border-rose-300 text-rose-500'
                        }`}
                      >
                        {false ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="fill-current w-5 h-5 inline"
                            >
                              <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                            </svg>
                            <span className="mr-2">
                              افزایش موجودی
                            </span>
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="fill-current w-5 h-5 inline"
                            >
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                            </svg>
                            <span className="mr-2">کاهش موجودی</span>
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Wallet;
