import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProfile,
  archiveUser,
  updateChat,
} from "../..//app/reducers/quickChat";

function Chat() {
  const state = useSelector((reducer) => reducer.quickChat);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(state.users.find((user) => user.id == state.selected));
  }, [state]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const ref = useRef();
  const handleEnter = (e) => {
    if (e.keyCode == 13) {
      if (message.length > 0) {
        setChat([
          ...chat,
          {
            user: "Me",
            message,
          },
        ]);
        dispatch(
          updateChat({
            user: "Me",
            message,
          })
        );
        setMessage("");
      }
    }
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight - 200;
    }
  }, [chat]);
  const sendMessage = (msg) => {
    console.log(msg);
    if (msg.length > 0) {
      setChat([
        ...chat,
        {
          user: "Me",
          message: msg,
        },
      ]);
      dispatch(
        updateChat({
          user: "Me",
          message: msg,
        })
      );
      setMessage("");
    }
  };
  return (
    <div className="h-full flex flex-col justify-between">
      <div
        className="p-5 flex flex-col gap-2 max-h-full overflow-y-auto"
        ref={ref}
      >
        {user &&
          user.chat.map((details, index) => (
            <div
              key={index}
              className={
                details.user == "Me"
                  ? "flex flex-row-reverse gap-2 items-center"
                  : "flex gap-2 items-center"
              }
            >
              <img
                src={details.user == "Me" ? state.img : user.img}
                alt="profile"
                className="h-7 w-7 rounded-full"
              />
              <div
                className={
                  details.user == "Me"
                    ? "rounded-xl bg-gray-700 p-2 max-w-prose shadow-md text-sm text-gray-100"
                    : "bg-white rounded-xl p-2 max-w-prose shadow-md text-sm text-slate-800"
                }
              >
                <div className="break-all">{details.message}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="sm:flex block mx-2 gap-2 my-10">
        <input
          type="text"
          value={message}
          className="sm:grow w-full p-2 rounded-xl border-2 border-slate-300"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <button
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 rounded-xl text-white flex gap-2 items-center"
          onClick={() => sendMessage(message)}
        >
          Send
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
