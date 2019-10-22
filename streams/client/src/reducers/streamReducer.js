import _ from "lodash";
import * as t from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case t.FETCH_ALL_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case t.FETCH_ONE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case t.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case t.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case t.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
