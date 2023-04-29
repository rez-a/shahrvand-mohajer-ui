import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/shared/inputs/TextInput';
import Card from './Card';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { ADDRESSES, EDIT_PROFILE, PROFILE } from 'services/endPoints';
import { postWithToken } from 'services/swr/postWithToken';
import Spinner from 'components/shared/Spinner';
import TextAreaInput from 'components/shared/inputs/TextAreaInput';
import validateUserInfo from 'helper/validateUserInfo';
import { useEffect } from 'react';
import { postFetcher } from 'services/postFetcher';
import storeAuthToken from 'helper/handlerAuthorazation/storeAuthToken';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserProvider';
import decodeToken from 'helper/handlerAuthorazation/decodeToken';
import { fetcher } from 'services/swr/fetcher';

const EditProfile = (props) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { data: user } = useSWR(PROFILE, postWithToken);
  const { data: addresses } = useSWR(ADDRESSES, fetcher);
  console.log(addresses);
  const [newInfo, setNewInfo] = useState({
    name: '',
    tel: '',
    address: '',
    mobile: '',
  });
  const [validateInfo, setValidateInfo] = useState({
    name: true,
    tel: true,
    address: true,
  });

  useEffect(() => {
    user &&
      setNewInfo({
        name: user.name,
        address: user.address,
        mobile: user.mobile,
        tel: user.tel,
      });
  }, [user]);

  console.log(user);

  const handleEditProfile = async () => {
    if (Object.values(validateUserInfo(newInfo)).includes(false)) {
      setValidateInfo(validateUserInfo(newInfo));
    } else {
      const response = await postFetcher(EDIT_PROFILE, {
        name: newInfo.name,
        tel: newInfo.tel,
        address: newInfo.address,
      });
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
            <div>
              <TextAreaInput
                id="address"
                label="آدرس پیش فرض"
                placeholder="آدرس پیش فرض"
                valid={validateInfo.address}
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
            className="bg-sky-500/90  text-white w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              {loading && <Spinner />}
              <span className="mr-2">ویرایش اطلاعات</span>
            </div>
          </button>
          <Link
            to="/profile/main"
            className="bg-rose-500/90 text-white p-2 px-4 mr-2 text-sm rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300"
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
