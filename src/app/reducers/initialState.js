export const initialState = {
  profile: "Adam Stinks",
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  selected: 2,
  users: [
    {
      id: 1,
      name: "Nadine Burzler",
      archived: true,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      chat: [
        {
          user: "Me",
          message: "Hi Henry!!",
        },
        {
          user: "Me",
          message: "How can I help you today ?",
        },
        {
          user: "Friend",
          message: "Hey Bill nice to meet you!",
        },
      ],
      email: "nadynburzler@gmail.com",
      activity: [1, 2, 3, 4, 5, 6, 7],
      time: "13h",
      attended: "188",
      meetings: "118",
      rejected: "41",
      pending: 1,
    },
    {
      id: 2,
      name: "Jurica Koletic",
      archived: false,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      chat: [
        {
          user: "Me",
          message: "Hi Henry!!",
        },
        {
          user: "Me",
          message: "How can I help you today ?",
        },
        {
          user: "Friend",
          message: "Hey Bill nice to meet you!",
        },
        {
          user: "Friend",
          message: "Hope you are doing fine",
        },
        {
          user: "Me",
          message: "I'm Good thanks for asing",
        },
        {
          user: "Friend",
          message:
            "I'm interested to know more about prices and services you offer",
        },
        {
          user: "Me",
          message:
            "Sure, please check below link to find more details https://www.google.com",
        },
      ],
      email: "juricakoletic@gmail.com",
      activity: [7, 6, 5, 2, 3, 6, 7],
      time: "13h",
      attended: "180",
      meetings: "110",
      rejected: "46",
    },
    {
      id: 3,
      name: "Lesly Juarez",
      archived: false,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      chat: [],
      email: "leslyjuarez@gmail.com",
      activity: [7, 6, 5, 4, 3, 2, 1],
      time: "13h",
      attended: "144",
      meetings: "140",
      rejected: "4",
    },
    {
      id: 4,
      name: "Henkry Boyd",
      archived: false,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      chat: [
        {
          user: "Me",
          message: "Hi Henry!!",
        },
        {
          user: "Me",
          message: "How can I help you today ?",
        },
        {
          user: "Friend",
          message: "Hey Bill nice to meet you!",
        },
        {
          user: "Friend",
          message: "Hope you are doing fine",
        },
        {
          user: "Me",
          message: "I'm Good thanks for asing",
        },
        {
          user: "Friend",
          message:
            "I'm interested to know more about prices and services you offer",
        },
        {
          user: "Me",
          message:
            "Sure, please check below link to find more details https://www.google.com",
        },
      ],
      email: "henkryboyd@gmail.com",
      activity: [7, 6, 6, 2, 3, 6, 6],
      time: "19h",
      attended: "167",
      meetings: "117",
      rejected: "50",
      pending: 4,
    },
    {
      id: 5,
      name: "Julian Wan",
      archived: true,
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      chat: [
        {
          user: "Me",
          message: "Hi Henry!!",
        },
        {
          user: "Me",
          message: "How can I help you today ?",
        },
        {
          user: "Friend",
          message: "Hey Bill nice to meet you!",
        },
        {
          user: "Friend",
          message: "Hope you are doing fine",
        },
        {
          user: "Me",
          message: "I'm Good thanks for asing",
        },
        {
          user: "Friend",
          message:
            "I'm interested to know more about prices and services you offer",
        },
        {
          user: "Me",
          message:
            "Sure, please check below link to find more details https://www.google.com",
        },
      ],
      email: "julianwan@gmail.com",
      activity: [7, 6, 5, 2, 3, 6, 7],
      time: "11h",
      attended: "111",
      meetings: "100",
      rejected: "11",
    },
    {
      id: 6,
      name: "Morgan Auron",
      archived: false,
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      chat: [],
      activity: [2, 3, 5, 5, 6, 6, 7],
      email: "julianwan@gmail.com",
      time: "21h",
      attended: "158",
      meetings: "101",
      rejected: "57",
    },
  ],
};
