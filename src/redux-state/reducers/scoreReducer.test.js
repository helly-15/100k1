import { CHANGE_TOTAL_SCORE, scoreReducer } from "./scoreReducer";

const mockStoreStart = {
  totalScore: 0,
  leftTeamScore: 0,
  rightTeamScore: 0,
};

it("store should update total score", () => {
  const newState = scoreReducer(mockStoreStart, {
    type: CHANGE_TOTAL_SCORE,
    payload: 50,
  });
  expect(newState.totalScore).toBe(50);
});

it("should keep other score the same", () => {
  const newState = scoreReducer(mockStoreStart, {
    type: CHANGE_TOTAL_SCORE,
    payload: 50,
  });
  expect(newState.leftTeamScore).toBe(0);
});
