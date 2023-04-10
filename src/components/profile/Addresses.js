import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalLayout from 'components/shared/modal/ModalLayout';
import TextAreaInput from 'components/shared/inputs/TextAreaInput';
import Card from './Card';

const Addresses = (props) => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  return (
    <Card title="آدرس ها">
      <div>
        <button
          onClick={() => setShowModalCreate(true)}
          className="border w-full border-dashed text-center text-sm text-zinc-400 py-4 mb-3"
        >
          <span>ایجاد آدرس جدید</span>
        </button>
        <div className="border border-gray-100 bg-gray-50/50 p-4 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <p className="text-zinc-500">
                گیرنده :
                <span className="text-black font-semibold mr-1">
                  جلال بهرامی راد
                </span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModalEdit(true)}
                className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300"
              >
                ویرایش
              </button>
              <button className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300">
                حذف
              </button>
            </div>
          </div>
          <p className="text-zinc-500 my-3 text-sm">
            شماره تماس :
            <span className="text-black font-semibold mr-1">
              09302582971
            </span>
          </p>
          <p>
            استان خراسان شمالی ، ‌شهر بجنورد ، خراسان شمالی-بجنورد
          </p>
        </div>
        <div className="border border-gray-100 bg-gray-50/50 p-4 border-b-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <p className="text-zinc-500">
                گیرنده :
                <span className="text-black font-semibold mr-1">
                  جلال بهرامی راد
                </span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModalEdit(true)}
                className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300"
              >
                ویرایش
              </button>
              <button className="border  rounded py-1 px-2 flex items-center bg-gray-100 text-xs border-gray-200 hover:bg-gray-200/70 text-zinc-500 transition-all duration-300">
                حذف
              </button>
            </div>
          </div>
          <p className="text-zinc-500 my-3 text-sm">
            شماره تماس :
            <span className="text-black font-semibold mr-1">
              09302582971
            </span>
          </p>
          <p>
            استان خراسان شمالی ، ‌شهر بجنورد ، خراسان شمالی-بجنورد
          </p>
        </div>
        <ModalLayout
          isShow={showModalCreate}
          setShow={() => setShowModalCreate(false)}
        >
          <div className="relative flex flex-col rounded-md bg-clip-border text-gray-700 shadow-none bg-white max-w-lg w-full  ">
            <h4 className="text-xl font-semibold text-center border-b mx-4 py-3">
              ایجاد آدرس جدید
            </h4>

            <form className="mt-8 mb-2 px-4 py-3">
              <TextAreaInput
                label="آدرس"
                placeholder="آدرس"
                id="address"
              />
              <button
                className="mt-6 w-full  rounded-md bg-rose-500 py-3 px-6 text-center  text-sm font-bold  text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 duration-300"
                type="button"
              >
                افزودن
              </button>
            </form>
          </div>
        </ModalLayout>
        <ModalLayout
          isShow={showModalEdit}
          setShow={() => setShowModalEdit(false)}
        >
          <div className="relative flex flex-col rounded-md bg-clip-border text-gray-700 shadow-none bg-white max-w-lg w-full  ">
            <h4 className="text-xl font-semibold text-center border-b mx-4 py-3">
              ویرایش آدرس
            </h4>

            <form className="mt-8 mb-2 px-4 py-3">
              <TextAreaInput
                label="آدرس"
                placeholder="آدرس"
                id="address"
              />
              <button
                className="mt-6 w-full  rounded-md bg-rose-500 py-3 px-6 text-center  text-sm font-bold  text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 duration-300"
                type="button"
              >
                ویرایش
              </button>
            </form>
          </div>
        </ModalLayout>
      </div>
    </Card>
  );
};

Addresses.propTypes = {};

export default Addresses;
