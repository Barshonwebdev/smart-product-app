import React from 'react';
import UserInfo from './UserInfo';

const Menu = () => {
    return (
        <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="">
          <div className=" min-h-44 md:min-h-screen min-w-64 rounded text-white bg-blue-600">
            <div className="mt-2 text-center">
              <p className="text-lg">Dashboard Options</p>
            </div>
          </div>
          <div></div>
        </div>
        {/* user info  */}
        <UserInfo></UserInfo>
      </div>
    );
};

export default Menu;