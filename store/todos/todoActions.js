//@ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 const baseUrl = "https://jsonplaceholder.typicode.com"


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (page) => {
//   try {
//     const responce = await axios.get(`${baseUrl}/todos?_page=${page}&_limit=5`);
//     return responce.data;
//   } catch (error) {
//     return error.message
//   }
})
export const setPages = createAsyncThunk('todos/setPages', async (page) => {
	// try {
	//   const { data } = await axios.get(`${baseUrl}/todos`);
	// return data.length
	// } catch (error) {
	//   return error.message
	// }
  })
export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todo)=> {
	// try {
	// 	const responce = await axios.post(`${baseUrl}/todos`, {
	// 		body: {
	// 		  id: Date.now().toString(),
	// 		  userId: todo.userId,
	// 		  title: todo.title,
	// 		  completed: false
	// 		}
	// 	})
	// 	return responce.data.body

	// } catch (error) {
	// 	return error.message
	// }
})
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id)=> {
	try {
		const responce= await axios.delete(`${baseUrl}/todos/${id}`)
		return id
	} catch (error) {
		return error.message
	}
})
export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo)=> {
	try {
		const responce= await axios.put(`${baseUrl}/todos/${updatedTodo.id}`,
			{
			userId: updatedTodo.userId,
			id: updatedTodo.id,
			title: updatedTodo.title,
			completed: updatedTodo.completed,
		  })
		return responce.data
	} catch (error) {
		return error.message
	}
})
export const toggleTodoAcion = createAsyncThunk('todos/toggleTodoAction', async(toggleTodo)=>{
	console.log(toggleTodo);
	try {
		const responce= await axios.put(`${baseUrl}/todos/${toggleTodo.id}`,
			{
			userId: toggleTodo.userId,
			id: toggleTodo.id,
			title: toggleTodo.title,
			completed: toggleTodo.completed
		  })
		return responce.data
	} catch (error) {
		return error.message
	}
})



