import React from 'react';
import Card from './Card';
import TextInput from 'components/shared/inputs/TextInput';

const Wallet = () => {
  return (
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
            <span class="bg-gray-100 absolute left-0 top-1/2 ml-1 -translate-y-1/2 text-gray-800 text-sm font-medium px-3 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">
              تومان
            </span>
          </div>
          <button
            // disabled={loading}
            // onClick={handleEditProfile}
            className="bg-sky-500/90  text-white w-full sm:w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              {/* {loading && <Spinner />} */}
              <span className="mr-2">افزایش موجودی</span>
            </div>
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Wallet;
