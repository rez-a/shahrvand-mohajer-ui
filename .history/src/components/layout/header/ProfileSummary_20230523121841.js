import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileSummaryAccessLinks from './ProfileSummaryAccessLinks';
import { Link } from 'react-router-dom';
import { UserContext } from 'contexts/UserProvider';

const ProfileSummary = (props) => {
  const [showProfileLinks, setShowProfileLinks] = useState(false);
  const { user } = useContext(UserContext);
  function closeHandler(e) {
    !profileLinksRef?.current.contains(e.target) &&
      setShowProfileLinks(false);
  }
  const profileLinksRef = useRef();

  return !!user ? (
    <div
      ref={profileLinksRef}
      className="flex items-center cursor-pointer relative group z-50  py-1"
    >
      <button
        onClick={() => setShowProfileLinks(!showProfileLinks)}
        className=" w-full h-full absolute focus:ring-4 focus:ring-red-100 rounded-lg bg-red-100/20 text-black"
      />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-zinc-400 group-hover:fill-zinc-500"
        >
          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
        </svg>
      </div>
      <div className="text-sm hidden sm:block">
        <p className="w-28 text-left font-bold">
          {!!user.name ? user.name : 'نام کاربری'}
        </p>
        <p className="w-28 text-left text-zinc-400 text-xs mt-1">
          {user.mobile}
        </p>
      </div>
      <div className="p-1.5 rounded-full mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="fill-zinc-600" width="34" height="34" fill="none" viewBox="0 0 24 24">
  <path d="M12 11.25a3.744 3.744 0 0 1-3.733-3.733h-1.5A5.244 5.244 0 0 0 12 12.75v-1.5ZM8.267 7.517C8.267 5.456 9.954 3.75 12 3.75v-1.5c-2.888 0-5.233 2.392-5.233 5.267h1.5ZM12 3.75a3.744 3.744 0 0 1 3.733 3.733h1.5A5.244 5.244 0 0 0 12 2.25v1.5Zm3.733 3.733c0 2.061-1.687 3.767-3.733 3.767v1.5c2.888 0 5.233-2.392 5.233-5.267h-1.5ZM19 20.25H5v1.5h14v-1.5Zm-14 0a.253.253 0 0 1-.25-.25h-1.5c0 .964.786 1.75 1.75 1.75v-1.5ZM4.75 20v-1h-1.5v1h1.5Zm0-1A3.262 3.262 0 0 1 8 15.75v-1.5A4.762 4.762 0 0 0 3.25 19h1.5ZM8 15.75h8v-1.5H8v1.5Zm8 0A3.262 3.262 0 0 1 19.25 19h1.5A4.762 4.762 0 0 0 16 14.25v1.5ZM19.25 19v1h1.5v-1h-1.5Zm0 1c0 .136-.114.25-.25.25v1.5c.964 0 1.75-.786 1.75-1.75h-1.5Z"/>
</svg>
      </div>
      {showProfileLinks && (
        <ProfileSummaryAccessLinks
          setShowProfileLinks={setShowProfileLinks}
          showProfileLinks={showProfileLinks}
          closeHandler={closeHandler}
        />
      )}
    </div>
  ) : (
    <Link
      to="/login"
      className="border rounded text-xs py-2 px-2 flex items-center bg-gray-50 border-gray-100 hover:bg-zinc-100 transition mr-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="fill-zinc-500"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z" />
      </svg>
      <span className="px-2 border-l hidden sm:inline">ورود</span>
      <span className="px-2 hidden sm:inline">ثبت نام</span>
    </Link>
  );
};

ProfileSummary.propTypes = {};

export default ProfileSummary;
