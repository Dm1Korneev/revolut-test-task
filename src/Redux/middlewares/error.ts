export default () => (next) => (action) => {
  if (action.payload && action.payload.error) {
    console.warn('[Error Middleware error]:', action.payload.error); /* eslint-disable-line no-console */
  }

  return next(action);
};

