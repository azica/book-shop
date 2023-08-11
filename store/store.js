import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import topSellersReducer from './topSelllers/topSellersSlice';
import bookSortReducer from './bookSort/bookSortSlice';
import cartReducer from './cart/cartSlice';

const rootReducer = combineReducers({
	books: bookReducer,
	topSellers: topSellersReducer,
	bookSort: bookSortReducer,
	cart: cartReducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});
