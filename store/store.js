import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import bookReducer from './books/bookSlice';
import topSellersReducer from './topSelllers/topSellersSlice';
import bookSortReducer from './bookSort/BookSortSlice';
import CartReducer from './cart/cartSlice'

const rootReducer = combineReducers({
	todos: todosReducer,
	books: bookReducer,
	topSellers: topSellersReducer,
	bookSort: bookSortReducer,
	cart: CartReducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});
