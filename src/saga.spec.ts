import { call, delay, put } from "redux-saga/effects";
import { incrementAsync } from "./saga";

it("incrementAsync Saga Test", () => {
  const gen = incrementAsync();
  expect(gen.next().value).toEqual(delay(1000));
  expect(gen.next().value).toEqual(put({ type: "INCREMENT" }));
  expect(gen.next()).toEqual({ done: true, value: undefined });
});
