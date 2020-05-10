import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

export const limpar = () => {
  return [
    {
      type: "LIMPAR",
      payload: "",
    },

    search(),
  ];
};

export const limparInput = () => {
  return [
    {
      type: "LIMPAR_INPUT",
      payload: "",
    },
  ];
};

export const search4 = () => {
  const request = axios.get(`${URL}?sort=-dataCriacao`);
  return {
    type: "TODO_SEARCHED",
    payload: request,
  };
};

export const search2 = (description) => {
  const regex = description ? `&descricao__regex=/${description}/` : "";
  const request = axios.get(`${URL}?sort=-dataCriacao${regex}`);
  return {
    type: "TODO_SEARCHED2",
    payload: request,
  };
};

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    console.log("aqui description" + description);

    const regex = description ? `&descricao__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-dataCriacao${regex}`)
      .then((resp) => dispatch({ type: "TODO_SEARCHED", payload: resp.data }));
    //.then(limpar());
  };
};

export const add = (descricao) => {
  console.log(`valor da descricao${!descricao}%`);

  if (!descricao || descricao.trim() === '' ) {
    return { type: "ADD"}
  } else {
    return (dispatch) => {
      axios
        .post(URL, { descricao })
        .then((resp) => dispatch({ type: "ADD", payload: resp.data }))
        .then((resp) => dispatch(search()));
    };
  }
};

export const concluido = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { feito: true })
      .then((resp) => dispatch({ type: "CONCLUIDO", payload: resp.data }))
      .then((resp) => dispatch(search()));
  };
};

export const desfazer = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { feito: false })
      .then((resp) => dispatch({ type: "DESFAZER", payload: resp.data }))
      .then((resp) => dispatch(search()));
  };
};

export const remove = (todo) => {
  return (dispatch) => {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((resp) => dispatch({ type: "REMOVE", payload: resp.data }))
      .then((resp) => dispatch(limpar()))
      .then((resp) => dispatch(search()));
  };
};
