import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'components/shared/inputs/TextInput';
import Card from './Card';

const EditProfile = (props) => {
  return (
    <Card title="ویرایش اطلاعات کاربری">
      <div className="px-4 py-5">
        <form>
          <div>
            <TextInput
              label="نام کاربری"
              placeholder="نام کاربری"
              id="usename"
            />
          </div>
          <div>
            <TextInput
              label="تلفن همراه"
              placeholder="تلفن همراه"
              id="mobile"
            />
          </div>
          <div>
            <TextInput
              label="تلفن ثابت"
              placeholder="تلفن ثابت"
              id="phone"
            />
          </div>
        </form>
        <button className="bg-sky-500/90 text-white w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300">
          ویرایش اطلاعات
        </button>
        <button className="bg-rose-500/90 text-white p-2 px-4 mr-2 text-sm rounded-md font-bold shadow-lg shadow-rose-500/50 hover:bg-rose-500 transition-all duration-300">
          انصراف
        </button>
      </div>
    </Card>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
