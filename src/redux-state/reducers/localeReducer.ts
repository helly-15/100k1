export const CHANGE_LOCALE = "CHANGE_LOCALE";

export function localeReducer(
  state: { locale: string } = {
    locale: "en",
  },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
}
