import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => ({
    description: "teste de reducer",
    list: [
      {
        _id: 1,
        descricao: "Redux Inicial",
        feito: false,
      },
      {
        _id: 2,
        descricao: "Redux 2",
        feito: true,
      },
    ],
  }),
});

export default rootReducer
