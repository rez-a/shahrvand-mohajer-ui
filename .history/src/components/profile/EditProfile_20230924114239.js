import React, { useState } from 'react';
import TextInput from 'components/shared/inputs/TextInput';
import Card from './Card';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import {
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
import Toast from 'utilities/sweetAlert';

const EditProfile = (props) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { data: user } = useSWR(PROFILE, dispatcher);
  const { name, mobile, tel, address } = !!user && user.data;

  const [newInfo, setNewInfo] = useState({
    name: '',
    tel: '',
    mobile: '',
    address: ''
  });
  const [validateInfo, setValidateInfo] = useState({
    name: true,
  });

  useEffect(() => {
    setNewInfo({
      ...newInfo,
      name,
      mobile,
      tel,
      address
    });
  }, [user]);

  const handleEditProfile = async () => {
    if (Object.values(validateUserInfo(newInfo)).includes(false)) {
      setValidateInfo(validateUserInfo(newInfo));
    } else {
      setLoading(true);
      try {
        const editResponse = await dispatcher(EDIT_PROFILE, {
          name: newInfo.name,
          address :newInfo.address,
          tel: newInfo.tel,
        });
        const refreshTokenResponse = await dispatcher(
          REFRESH_TOKEN,
          {}
        );
        editUser(refreshTokenResponse.data.access_token);
        Toast.fire({
          icon: 'success',
          title: editResponse.message,
        });
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
          <form>
            <div>
              <TextInput
                label="نام و نام خانوادگی"
                placeholder="نام و نام خانوادگی"
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
                valid={true}
                value={newInfo.tel}
                changeHandler={(e) =>
                  setNewInfo({ ...newInfo, tel: e.target.value })
                }
              />
            </div>
            <div>
              <TextInput
                label="آدرس تحویل سفارش"
                placeholder="مهاجران - بلوار ملاصدرا - کوچه یاس - ساختمان الماس - طبقه دوم"
                id="address"
                valid={true}
                value={newInfo.address}
                changeHandler={(e) =>
                  setNewInfo({ ...newInfo, address: e.target.value })
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
