export default function loadedReducer(state = {}, action) {
  const { type } = action;
  const matches = /(.*)_(SUCCESS)/.exec(type);

  if (!matches) return state;

  const [, requestName] = matches;
  return {
    ...state,
    [requestName]: true,
  };
}
