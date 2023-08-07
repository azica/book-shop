//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, setPages, addNewTodo, removeTodo, updateTodo, toggleTodoAcion} from "./todoActions";
 
const initialState = {
  todos: [],
  totalCount: 0,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
}
 
export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
	setCurrentPage: (state, { payload })=> {
		state.currentPage =  payload
	  }
  },
  extraReducers: {
	[fetchTodos.fulfilled]:(state, action)=> {
		//   state.isLoading = false;
		//   state.isSuccess = true;
		  state.todos = action.payload;
	},
	[setPages.fulfilled]:(state, action)=> {
		 state.totalCount = action.payload
	},
	[addNewTodo.fulfilled]:(state, action)=> {
		state.todos.push(action.payload)
	},
	[removeTodo.fulfilled]:(state, action)=> {
		state.todos = state.todos.filter(el=>el.id!==action.payload)
	},
	[updateTodo.fulfilled]:(state, action)=> { 
		state.todos = state.todos.map(el=>{
			if(el.id===action.payload.id) {
				return action.payload
			} 
			return el
		})
	},
	[toggleTodoAcion.fulfilled]:(state, action)=> {
		state.todos = state.todos.map(todo=>{
			if(todo.id===action.payload.id){
				return {...todo,
				completed: !todo.completed}
			} 
			return todo
		})
	},

    // [fetchTodos.pending]: (state) => {
    //   state.isLoading = true;
    // },
   
    // [fetchtodos.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    //   state.errorMessage = payload
    // },
	

  }
 
})
 
export const {setCurrentPage} = TodosSlice.actions
export const TodosSelector =(state)=> state.todos

export default TodosSlice.reducer;