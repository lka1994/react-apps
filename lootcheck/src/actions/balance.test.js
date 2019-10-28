import * as t from "./constants";
import * as actions from "./balance";

it("creates an action to set the balance", () => {
  const balance = 0;
  const expectedAction = { type: t.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("creates an actions to deposit into the balance", () => {
  const deposit = 10;
  const expectedAction = { type: t.DEPOSIT, deposit };
  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it("creates an action to withdraw from the balance", () => {
  const withdrawal = 10;
  const expectedAction = { type: t.WITHDRAW, withdrawal };
  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});
