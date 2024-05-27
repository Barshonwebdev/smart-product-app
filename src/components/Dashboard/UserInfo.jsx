import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth();
  const { displayName, email, photoURL, emailVerified } = user;
    return (
        <div className="card md:w-72 bg-base-100 shadow-xl my-3 md:my-0 me-3 ">
          <h1 className="text-2xl text-center text-gray-600 md:mt-3">
            User Information
          </h1>
          <figure className="px-10 mt-4">
            <img src={photoURL} className="rounded-xl" />
          </figure>
          <div className=" items-center text-gray-600 mx-2 text-center">
            <h2 className="my-3 text-lg">Username: {displayName}</h2>
            <p className="mb-3 md:mb-2 text-lg">
              Email: <span className="font-semibold">{email}</span>
            </p>
            {emailVerified ? <p>Verified: Yes</p> : <p>Verified: No</p>}
          </div>
        </div>
    );
};

export default UserInfo;