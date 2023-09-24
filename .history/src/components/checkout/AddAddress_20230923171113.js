import Spinner from "components/shared/Spinner";
import TextAreaInput from "components/shared/inputs/TextAreaInput";
import ModalLayout from "components/shared/modal/ModalLayout";
import React from "react";
import { useState } from "react";
import { handleRequest } from "services";
import { ADDRESSES } from "services/endPoints";
import { mutate } from "swr";
import Toast from "utilities/sweetAlert";

const AddAddress = ({ addresses, handleUpdateAddresses }) => {
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [addressValidate, setAddressValidate] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAddAddress = async () => {
    if (newAddress.length) {
      setLoading(true);
      const response = await handleRequest({
        url: ADDRESSES,
        method: "post",
        data: { address: newAddress },
      });
      Toast.fire({
        icon: "success",
        title: response.data,
      });
      await mutate();
      setLoading(false);
      setNewAddress("");
      setShowModal(false);
    } else {
      setAddressValidate(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="border-y-2 border-sky-600 flex gap-4 w-full text-right font-semibold text-md text-sky-600 py-4 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline stroke-current"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5.997 14.001a4.002 4.002 0 1 1 0 8.003 4.002 4.002 0 0 1 0-8.003m-1.178 4.002h2.357m-1.179 1.178v-2.357"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5.757 14.01a8.504 8.504 0 1 1 4.232 4.232"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m14.455 14.601 2.501-6.759a.619.619 0 0 0-.795-.795L9.399 9.551a.618.618 0 0 0 .064 1.18l3.046.766.76 3.036a.62.62 0 0 0 1.186.068v0Z"
            clip-rule="evenodd"
          />
        </svg>

        <span>ایجاد آدرس جدید</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline rotate-180 stroke-current mr-auto"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m10 16 4-4-4-4"
          />
        </svg>
      </button>
      <ModalLayout isShow={showModal} setShow={() => setShowModal(false)}>
        <div className="relative flex flex-col rounded-md bg-clip-border text-gray-700 shadow-none bg-white max-w-lg w-full  ">
          <h4 className="text-xl font-semibold text-center border-b mx-4 py-3">
            ایجاد آدرس جدید
          </h4>

          <form className="mt-4 mb-2 px-4 py-3">
            <TextAreaInput
              label="آدرس"
              placeholder="آدرس"
              id="address"
              value={newAddress}
              valid={addressValidate}
              changeHandler={(e) => setNewAddress(e.target.value)}
            />
            {!addressValidate && (
              <div className="bg-rose-50 text-rose-600 rounded px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current w-4 h-4 inline"
                >
                  <path d="M12.865 3.00017L22.3912 19.5002C22.6674 19.9785 22.5035 20.5901 22.0252 20.8662C21.8732 20.954 21.7008 21.0002 21.5252 21.0002H2.47266C1.92037 21.0002 1.47266 20.5525 1.47266 20.0002C1.47266 19.8246 1.51886 19.6522 1.60663 19.5002L11.1329 3.00017C11.4091 2.52187 12.0206 2.358 12.4989 2.63414C12.651 2.72191 12.7772 2.84815 12.865 3.00017ZM10.9989 16.0002V18.0002H12.9989V16.0002H10.9989ZM10.9989 9.00017V14.0002H12.9989V9.00017H10.9989Z"></path>
                </svg>
                <span className="text-xs mr-1 font-semibold">
                  فیلد آدرس باید مقدار داشته باشد
                </span>
              </div>
            )}

            <button
              onClick={handleAddAddress}
              className="mt-6 w-full flex items-center justify-center rounded-md bg-rose-500 py-3 px-6 text-center  text-sm font-bold  text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 duration-300"
              type="button"
            >
              {loading && <Spinner />}
              <span className="mr-2">افزودن</span>
            </button>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};

export default AddAddress;
