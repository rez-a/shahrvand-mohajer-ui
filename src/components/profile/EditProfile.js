import React, { useState } from 'react';
import TextInput from 'components/shared/inputs/TextInput';
import Card from './Card';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import {
  ADDRESSES,
  EDIT_PROFILE,
  PROFILE,
  REFRESH_TOKEN,
} from 'services/endPoints';
import Spinner from 'components/shared/Spinner';
import TextAreaInput from 'components/shared/inputs/TextAreaInput';
import validateUserInfo from 'helper/validateUserInfo';
import { useEffect } from 'react';
import storeAuthToken from 'helper/handlerAuthorazation/storeAuthToken';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserProvider';
import decodeToken from 'helper/handlerAuthorazation/decodeToken';
import { fetcher } from 'services/swr/fetcher';
import dispatcher from 'services/dispatcher';

const EditProfile = (props) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { data: user } = useSWR(PROFILE, dispatcher);
  const { data: addresses } = useSWR(ADDRESSES, fetcher);
  const [newInfo, setNewInfo] = useState({
    name: '',
    tel: '',
    mobile: '',
  });
  const [validateInfo, setValidateInfo] = useState({
    name: true,
    tel: true,
  });

  useEffect(() => {
    user &&
      setNewInfo((prevInfo) => {
        return {
          ...prevInfo,
          name: user.data.name,
          mobile: user.data.mobile,
          tel: user.data.tel,
        };
      });
  }, [user?.id]);

  console.log(user);

  const handleEditProfile = async () => {
    if (Object.values(validateUserInfo(newInfo)).includes(false)) {
      setValidateInfo(validateUserInfo(newInfo));
    } else {
      setLoading(true);
      try {
        const editResponse = await dispatcher(EDIT_PROFILE, {
          name: newInfo.name,
          tel: newInfo.tel,
        });
        const refreshTokenResponse = await dispatcher(
          REFRESH_TOKEN,
          {}
        );
        editUser(refreshTokenResponse.access_token);
      } catch (err) {}

      setLoading(false);
    }
  };

  const editUser = (token) => {
    storeAuthToken(token);
    setUser(decodeToken(token));
  };
  return (
    <Card title="ویرایش اطلاعات کاربری">
      {!user && !addresses ? (
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md grid place-items-center">
          <Spinner width="w-8" height="h-8" />
        </div>
      ) : (
        <div className="px-4 py-5">
          <form>
            <div>
              <TextInput
                label="نام کاربری"
                placeholder="نام کاربری"
                id="usename"
                valid={validateInfo.name}
                value={newInfo.name}
                changeHandler={(e) =>
                  setNewInfo({ ...newInfo, name: e.target.value })
                }
              />
            </div>
            <div>
              <TextInput
                label="تلفن همراه"
                placeholder="تلفن همراه"
                id="mobile"
                disabled={true}
                valid={true}
                value={newInfo.mobile}
                className="text-gray-400"
              />
            </div>
            <div>
              <TextInput
                label="تلفن ثابت"
                placeholder="تلفن ثابت"
                id="phone"
                valid={validateInfo.tel}
                value={newInfo.tel}
                changeHandler={(e) =>
                  setNewInfo({ ...newInfo, tel: e.target.value })
                }
              />
            </div>
            {!!addresses && (
              <>
                <div>
                  <TextAreaInput
                    className="text-gray-400"
                    id="address"
                    label="آدرس پیش فرض"
                    placeholder="آدرس پیش فرض"
                    valid={true}
                    value={addresses.data.at(0)}
                    disabled={true}
                  />
                </div>
                <div className="text-slate-400 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="fill-current inline"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path>
                  </svg>
                  <p className="text-xs inline mr-1">
                    هنگام ثبت سفارش میتوانید آدرس دیگری را انتخاب کنید
                  </p>
                </div>
              </>
            )}
          </form>

          <button
            disabled={loading}
            onClick={handleEditProfile}
            className="bg-sky-500/90  text-white w-full sm:w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              {loading && <Spinner />}
              <span className="mr-2">ویرایش اطلاعات</span>
            </div>
          </button>
          <Link
            to="/profile/main"
            className="bg-rose-500/90 block sm:inline text-center text-white p-2 px-4 mr-0 mt-6 sm:mr-2 sm:mt-0 text-sm rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300"
          >
            انصراف
          </Link>
        </div>
      )}
    </Card>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
