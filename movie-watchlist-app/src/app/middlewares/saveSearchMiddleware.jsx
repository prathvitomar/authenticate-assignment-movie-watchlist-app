const saveSearchMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === "movies/setSearchQuery") {
      const searchQuery = action.payload;
      const { user: { activeUser } } = getState();
  
      if (activeUser) {
        dispatch(addSearchHistory(searchQuery));
      }
    }
    return next(action);
  };
  
  export default saveSearchMiddleware;
  