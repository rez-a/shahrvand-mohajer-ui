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
      className="flex items-center cursor-pointer relative group z-50 px-2 ml-2 py-1"
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
      <div className="bg-gray-100 p-1.5 rounded-full mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m4.5 9a2.383 2.383 0 0 0-.594-.866v0a2.367 2.367 0 0 0-1.614-.634H9.708c-.6 0-1.174.227-1.614.634v0c-.26.241-.463.537-.594.866m3 4.865a8.998 8.998 0 0 1-6.321-4.422M5.15 6.17A8.96 8.96 0 0 0 3 12c0 .555.058 1.096.154 1.624M13.5 20.865a8.998 8.998 0 0 0 6.321-4.422M16.55 4.244a8.942 8.942 0 0 0-9.1 0m11.4 1.926A8.96 8.96 0 0 1 21 12c0 .555-.058 1.096-.154 1.624"/>
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
