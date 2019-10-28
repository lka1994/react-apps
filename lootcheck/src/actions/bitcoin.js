import * as t from "./constants";

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(json => dispatch({ type: t.FETCH_BITCOIN, bitcoin: json }));
  };
};
