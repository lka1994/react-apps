import streams from "../apis/streams";
import history from "../history";
import * as t from "./types";

export const signIn = userId => {
  return {
    type: t.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: t.SIGN_OUT
  };
};

export const fetchCreateStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({
    type: t.CREATE_STREAM,
    payload: response.data
  });
  history.push("/");
};

export const fetchAllStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({
    type: t.FETCH_ALL_STREAMS,
    payload: response.data
  });
};

export const fetchOneStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: t.FETCH_ONE_STREAM,
    payload: response.data
  });
};

export const fetchDeleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: t.DELETE_STREAM,
    payload: id
  });
  history.push("/");
};

export const fetchEditStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: t.EDIT_STREAM,
    payload: response.data
  });
  history.push("/");
};
