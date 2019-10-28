import * as t from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balance = (state = 0, action) => {
  let balance;
  switch (action.type) {
    case t.SET_BALANCE:
      balance = action.balance;
      break;
    case t.DEPOSIT:
      balance = state + action.deposit;
      break;
    case t.WITHDRAW:
      balance = state - action.withdrawal;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance)
  
  return balance;
};

export default balance;
