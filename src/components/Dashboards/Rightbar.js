import React, { useEffect, useState } from "react";
import plane from "../../plane.jpg";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, archiveUser } from "../..//app/reducers/quickChat";

function Rightbar() {
  const current = new Date(Date.now()).getDay();
  const state = useSelector((reducer) => reducer.quickChat);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(state.users.find((user) => user.id == state.selected));
  }, [state]);
  return (
    <div className="flex flex-col gap-5 mx-3">
      <div className="flex flex-col items-center justify-center bg-slate-100 px-2 py-6 rounded-xl gap-2 border-2 border-slate-200">
        <div className="rounded-full text-2xl bold text-blue-800 bg-blue-300 px-4 py-4">
          {user &&
            user.name.split(" ")[0][0].toUpperCase() +
              user.name.split(" ")[1][0].toUpperCase()}
        </div>
        <div className="flex gap-2 xl:self-start items-center mx-4 text-sm font-semibold text-gray-600">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>
          <div> {user && user.email}</div>
        </div>
        <div className="flex gap-2 xl:self-start items-center mx-4 text-sm font-semibold text-gray-600">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>{user && user.email}</div>
        </div>
        <div>
          <button
            className="bg-white border-4 hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 bold p-2 flex items-center justify-around gap-2 rounded-xl"
            onClick={() => dispatch(archiveUser())}
          >
            {user && user.archived ? "Unarchive" : "Archive"}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-100 px-2 py-6 rounded-xl gap-2 border-2 border-slate-200">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mx-1 w-full">
          <div className="p-3 bg-blue-200 flex justify-evenly rounded-xl items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400 self-center bg-blue-100 rounded-full px-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-bold text-blue-400">{user && user.time}</div>
              <div className="text-xs">Time</div>
            </div>
          </div>
          <div className="p-3 bg-green-200 flex justify-evenly rounded-xl items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-400 self-center bg-green-100 rounded-full px-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-bold text-green-400">
                {user && user.attended}
              </div>
              <div className="text-xs">Attended</div>
            </div>
          </div>
          <div className="p-3 bg-purple-200 flex justify-evenly rounded-xl items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-purple-400 h-7 w-7 self-center bg-purple-100 rounded-full px-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-bold text-purple-400">
                {user && user.meetings}
              </div>
              <div className="text-xs">Meetings</div>
            </div>
          </div>
          <div className="p-3 bg-red-200 flex justify-evenly rounded-xl items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-red-400 h-7 w-7 self-center bg-red-100 rounded-full px-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-red-400">
                {user && user.rejected}
              </div>
              <div className="text-xs">Rejected</div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex self-stretch justify-between mx-5 align-center">
          <div className="font-semibold">Current Weekly</div>
          <div className="text-xs text-gray-600 font-semibold">Activity</div>
        </div>
        <div className="hidden sm:flex xl:gap-5 md:gap-20 gap-10 mx-2">
          {user &&
            user.activity.map((item, index) => (
              <div className="flex flex-col-reverse gap-2" key={index}>
                <div
                  className={
                    index == current
                      ? "p-1 bg-blue-500 rounded-full"
                      : "p-1 bg-blue-100 rounded-full"
                  }
                ></div>
                <div
                  className={
                    index == current
                      ? "p-1 bg-blue-500 rounded-full h-20"
                      : `p-1 bg-blue-100 rounded-full h-20`
                  }
                  style={{ height: `${item * 10}px` }}
                ></div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-100 px-2 py-6 rounded-xl gap-4 relative border-2 border-slate-200">
        <img
          src={plane}
          alt="plane"
          className="absolute h-10 w-10"
          style={{ top: "-20px" }}
        />
        <div className="font-semibold text-xl">Onboard Clients</div>
        <div className="mx-4 text-sm text-gray-600">
          Share the link with prospects and discuss all stuff
        </div>
        <div>
          <button className="flex gap-2 items-center bg-blue-600 rounded-xl py-2 px-6 text-white text-sm">
            <div>Copy link</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
