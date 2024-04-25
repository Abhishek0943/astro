import { configureStore } from '@reduxjs/toolkit'
import useReducer from '../api/useReducer'
import SocketReducer from '../socket';



const store = configureStore({
  reducer: {
    user: useReducer,
    Socket:SocketReducer

  }
})
export default store
