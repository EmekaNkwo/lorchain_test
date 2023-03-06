/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import millify from "millify";

import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";

function UserData({ userData }) {
  return (
    <>
      {userData && (
        <div>
          <div className="flex flex-col gap-2 m-3 items-center lg:items-start ">
            <div className="w-full h-full object-cover ">
              <img
                src={userData?.avatar_url}
                alt={userData?.name}
                className="rounded-full w-[280px] h-[280px]"
              />
            </div>
            <span className="text-[26px] font-medium">{userData?.name}</span>
            <a
              href={userData?.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@{userData?.login}</span>
            </a>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <HiOutlineUsers />
                <span>{millify(userData?.followers)} followers</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineUser />
                <span> {millify(userData?.following)} following</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserData;
