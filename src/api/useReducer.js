/*
astro profile
chat
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// astro profile 
export const LoginAstro = createAsyncThunk(
    'LoginAstro',
    async (body) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/astro/login", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const Signup = createAsyncThunk(
    'Signup',
    async (body) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/astro", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const Verify = createAsyncThunk(
    'Verify',
    async (body) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/astro/verify", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const StepOne = createAsyncThunk(
    'StepOne',
    async (body) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/astro/stepOne", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const StepTwo = createAsyncThunk(
    'StepTwo',
    async (body) => {
        try {
            const response = await axios.post("http://localhost:8000/api/v1/astro/stepTwo", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const UpdateAstro = createAsyncThunk(
    'UpdateAstro',
    async (body) => {
        try {
            const response = await axios.put("http://localhost:8000/api/v1/astro", body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const TokenLogin = createAsyncThunk(
    'TokenLogin',
    async ({ token }) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/astro/token?token=${token}`)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
// chat 
export const ChatCreate = createAsyncThunk(
    'ChatCreate',
    async (body) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/v1/chat`, body)
            return response.data
        } catch (err) {
            return err.response.data
        }

    }
)
export const FetchMessage = createAsyncThunk(
    'FetchMessage',
    async ({ id }) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/message/${id}`)
            return response.data
        } catch (err) {
            console.log(err.response.data)
            return err.response.data
        }

    }
)

const responseHandler = (state, payload) => {
    if (payload.success) {
        state.user = payload.user
        payload.token && localStorage.setItem("token", payload.token)
    }
}

const userReducer = createSlice({
    name: "user",
    initialState: {
        astro: {},
        messages: []
    },
    reducers: {


    },
    extraReducers: {
        [LoginAstro.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
                console.log(payload.token)
                localStorage.setItem("token", payload.token)
            }
        },
        [StepOne.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
            }
        },
        [StepTwo.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
            }
        },
        [Verify.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
                localStorage.setItem('token', payload.token)
            }
        },
        [TokenLogin.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
            }
        }, [ChatCreate.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.astro = payload.astro
            }
        }, [FetchMessage.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                console.log(payload)
                state.messages = payload.messages
            }
        },

    }
}
)
export const { ClientRequestsRemove, ModelClose, ClientRequestsAdd, MessageHandler, Model } = userReducer.actions
export default userReducer.reducer