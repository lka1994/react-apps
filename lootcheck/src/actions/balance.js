import * as t from "./constants";

export const setBalance = balance => {
  return {
    type: t.SET_BALANCE,
    balance
  };
};

export const deposit = deposit => {
  return {
    type: t.DEPOSIT,
    deposit
  };
};

export const withdraw = withdrawal => {
  return {
    type: t.WITHDRAW,
    withdrawal
  };
};
