
import { createSlice } from "@reduxjs/toolkit"
import io from "socket.io-client"
const ENDPOINT = "http://localhost:8000"

const SocketReducer = createSlice({
    name: "socket",
    initialState: { socketData: null, user: {} },
    reducers: {
        Initialize: (state, { payload }) => {
            state.socketData = io(ENDPOINT);
            state.socketData?.emit("setup", payload);
        },
        OnLoginEmit: (state, { payload }) => {
            state.socketData?.emit("login", payload);
        },
        ChatRequest: (state, { payload }) => {
            state.socketData?.emit("chatRequest", payload);
        },
        UserUpdate: (state, { payload }) => {
            state.user = payload
        }, ChatReject: (state, { payload }) => {
            state.socketData?.emit("chatReject", payload);

        }, ChatAccept: (state, { payload }) => {
            state.socketData?.emit("chatStart", payload);

        },
        SendMessage: (state, { payload }) => {
            state.socketData?.emit("message", payload);

        },


    }
})
export const { Initialize, OnLoginEmit, ChatRequest, UserUpdate, ChatReject, ChatAccept, SendMessage } = SocketReducer.actions
export default SocketReducer.reducer