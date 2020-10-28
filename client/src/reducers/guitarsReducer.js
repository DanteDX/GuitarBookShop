const initialState = {
  guitars: [
    { id: 'guitar1', title: "Signature Guitar", price: 100, status: "notAdded",quantity:0 },
    { id: 'guitar2', title: "Electric Guitars", price: 90, status: "notAdded",quantity:0 },
    { id: 'guitar3', title: "Ovason Guitar", price: 70, status: "notAdded",quantity:0 },
    { id: 'guitar4', title: "Gibson Guitar", price: 200, status: "notAdded",quantity:0 },
    { id: 'guitar5', title: "Bass Guitar", price: 20, status: "notAdded",quantity:0 },
    { id: 'guitar6', title: "Super Saiyan Guitar", price: 40, status: "notAdded",quantity:0 },
    { id: 'guitar7', title: "Heroku Guitar", price: 300, status: "notAdded",quantity:0 },
    { id: 'guitar8', title: "Geek Guitar", price: 300, status: "notAdded",quantity:0 },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_GUITAR":
      return {
        ...state,
        payload,
      };
    case "DELETE_GUITAR":
      return {
        guitars: state.guitars.filter((gt) => gt.id !== payload.id),
      };
    case "GUITAR_STATUS_CHANGE":
      return {
        ...state,
        guitars: state.guitars.map((gt) => {
          if (gt.id === payload.id) {
            return {
              ...gt,
              quantity: payload.status === 'notAdded' ? 0 : 1,
              status: payload.status,
            };
          }
          return {
            ...gt
          };
        }),
      };
    case "GUITAR_QUANTITY_INCREASE":
      return {
        ...state,
        guitars: state.guitars.map((gt) => {
          if (gt.id === payload.id) {
            return {
              ...gt,
              quantity:gt.quantity + 1 
            };
          }
          return {
            ...gt
          };
        }),
      };

      case "GUITAR_QUANTITY_DECREASE":
        return {
          ...state,
          guitars: state.guitars.map((gt) => {
            if (gt.id === payload.id) {
              return {
                ...gt,
                quantity: gt.quantity - 1
              };
            }
            return {
              ...gt
            };
          }),
        };
    case "CLEAR_GUITAR":
      return {
        guitars: [],
      };
    case "RESET_GUITAR_STORE":
      return{
        guitars: initialState.guitars
      }
    default:
      return state;
  }
}
