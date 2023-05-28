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
  const [newInfo, setNewInfo] = useState({
    name: '',
    tel: '',
    mobile: '',
  });
  const [validateInfo, setValidateInfo] = useState({
    name: true,
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
      {!user ? (
        <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-md grid place-items-center">
          <Spinner width="w-8" height="h-8" />
        </div>
      ) : (
        <div className="px-4 py-5">
                      <Link to="/profile/main"  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM8.38535 17.2848L12 20.8995L15.6147 17.2848C14.9725 15.9339 13.5953 15 12 15C10.4047 15 9.0275 15.9339 8.38535 17.2848ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z"></path></svg>
              افزدون آدرس های جدید
            </Link>
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
