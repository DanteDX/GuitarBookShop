const initialState = {
  books: [
    {
      id: "book1",
      title: "Mathematical Methods",
      price: 100,
      status: "notAdded",
      quantity: 0,
    },
    {
      id: "book2",
      title: "An Introduction to Mechanics",
      price: 90,
      status: "notAdded",
      quantity: 0,
    },
    {
      id: "book3",
      title: "Quantum Mechanics",
      price: 70,
      status: "notAdded",
      quantity: 0,
    },
    {
      id: "book4",
      title: "Theoretical Physics (Vol.1)",
      price: 200,
      status: "notAdded",
      quantity: 0,
    },
    {
      id: "book5",
      title: "An Introduction to Computer Hardware",
      price: 20,
      status: "notAdded",
      quantity: 0,
    },
    {
      id: "book6",
      title: "Computer Programming in C++",
      price: 40,
      status: "notAdded",
      quantity: 0,
    },
    { id: "book7", title: "Java Programming", price: 300, status: "notAdded" },
    {
      id: "book8",
      title: "An Introduction to String Theory",
      price: 300,
      status: "notAdded",
      quantity: 0,
    },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_BOOK":
      return {
        ...state,
        payload,
      };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((bk) => bk.id !== payload.id),
      };
    case "BOOK_STATUS_CHANGE":
      return {
        ...state,
        books: state.books.map((gt) => {
          if (gt.id === payload.id) {
            return {
              ...gt,
              quantity: payload.status === "notAdded" ? 0 : 1,
              status: payload.status,
            };
          }
          return {
            ...gt,
          };
        }),
      };
    case "BOOK_QUANTITY_INCREASE":
      return {
        ...state,
        books: state.books.map((gt) => {
          if (gt.id === payload.id) {
            return {
              ...gt,
              quantity: gt.quantity + 1,
            };
          }
          return {
            ...gt,
          };
        }),
      };

    case "BOOK_QUANTITY_DECREASE":
      return {
        ...state,
        books: state.books.map((gt) => {
          if (gt.id === payload.id) {
            return {
              ...gt,
              quantity: gt.quantity - 1,
            };
          }
          return {
            ...gt,
          };
        }),
      };
    case "RESET_BOOK_STORE":
      return {
        books: initialState.books,
      };
    case "CLEAR_BOOKS":
      return {
        books: [],
      };
    default:
      return state;
  }
}
