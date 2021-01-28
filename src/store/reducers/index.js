import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import movieReducer from './MovieReducer';
import watchlistReducer from './WatchlistReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    movie: movieReducer,
    watchlist: watchlistReducer,
    router: connectRouter(history)
  });
