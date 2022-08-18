import React, { useState } from "react";
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../..//app/reducers/quickChat";

function Sidebar(props) {
  const state = useSelector((reducer) => reducer.quickChat);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [showActive, setShowActive] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className=" bg-white p-5 md:p-0 h-full md:border-0 border-r-2 border-slate-500 flex flex-col gap-5">
      <div className="flex gap-2 items-center justify-between md:justify-start">
        <img src={logo} className="h-10 w-10 rounded-full" alt="logo" />
        <div className="bold text-xl hidden md:inline-block">Quick Chat</div>
        <div className="block md:hidden justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => props.setShowSideBar(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className=" flex-col items-center justify-center bg-slate-100 px-2 py-6 rounded-xl gap-1 border-2 border-slate-200 hidden md:flex">
        <img src={state.img} alt="profile" className="h-12 w-12 rounded-full" />
        <div className="font-bold text-xl flex gap-2 justify-center items-center ">
          {state.profile}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => navigate("/profile")}
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-sm text-gray-400 font-semibold">
          Lead UI/UX designer
        </div>
        <div className="flex gap-2">
          Active
          <label class="relative flex justify-between items-center p-2 text-sm">
            <input
              type="checkbox"
              class="absolute left-1/2 -translate-x-1/2 w-1/2 h-full peer appearance-none rounded-md"
            />
            <span class="w-10 h-4 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-blue-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          Active Converstation
          <span className="hidden xl:inline-block px-2 py-1 mx-1 bg-slate-300 rounded-full text-xs font-semibold">
            {state.users.filter((user) => user.archived == false).length}
          </span>
        </div>

        {showActive ? (
          <div onClick={() => setShowActive(!showActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div onClick={() => setShowActive(!showActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <div className={`flex flex-col gap-2 ${showActive ? "hidden" : ""}`}>
        {state.users
          .filter((user) => user.archived == false)
          .map((user) => (
            <div
              className={`px-3 py-2 flex justify-between ${
                user.id === state.selected && "bg-slate-200"
              } hover:bg-slate-100 rounded-xl`}
              onClick={() => dispatch(selectUser(user.id))}
            >
              <div className="flex gap-4">
                <img
                  src={user.img}
                  alt="profile"
                  className="h-7 w-7 rounded-full"
                />
                <div>{user.name}</div>
              </div>
              {user.pending && user.pending != 0 ? (
                <div className="bg-red-500 px-3 py-2 rounded-full text-xs text-white font-semibold hidden xl:inline-block">
                  {user.pending}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
      </div>
      <div className="flex justify-between">
        <div>
          Archived Converstation
          <span className="px-2 py-1 mx-1 bg-slate-300 rounded-full text-xs font-semibold hidden xl:inline-block">
            {state.users.filter((user) => user.archived == true).length}
          </span>
        </div>
        <div>
          {showArchived ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setShowArchived(!showArchived)}
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setShowArchived(!showArchived)}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${!showArchived ? "hidden" : ""}`}>
        {state.users
          .filter((user) => user.archived == true)
          .map((user) => (
            <div
              className={`px-3 py-2 flex justify-between ${
                user.id === state.selected && "bg-slate-200"
              } hover:bg-slate-100 rounded-xl`}
              onClick={() => dispatch(selectUser(user.id))}
            >
              <div className="flex gap-4">
                <img
                  src={user.img}
                  alt="profile"
                  className="h-7 w-7 rounded-full"
                />
                <div>{user.name}</div>
              </div>
              {user.pending && user.pending != 0 ? (
                <div className="bg-red-500 px-3 py-2 rounded-full text-xs text-white font-semibold hidden xl:inline-block">
                  {user.pending}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
