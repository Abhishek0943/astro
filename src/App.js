import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, Navigate, useNavigate, useParams } from "react-router-dom"
// import Login from './pages/LoginPage/Login'
import { useSyncExternalStore } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { TokenLogin, ClientRequestsAdd, ClientRequestsRemove, CreateChat, busy, Cancel, ChatCreate } from './api/useReducer'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
// import Dashboard from './pages/DashBoard/Dashboard'
import Chats from './pages/chat/Chats'
// import Sessions from './pages/sessions/Sessions'
import io from 'socket.io-client';
// import ChatHistory from './pages/ChatHistory'
// import Workflow from './pages/Workflow'
// import Salary from './pages/Salary'
// import UserActivity from './pages/UserActivity'
import ring from "./one.mpeg"
import useSound from 'use-sound';
// import SessionsChat from './pages/SessionsChat'
// import Review from './pages/Review'
// import OffChats from './pages/OffChata'
// import Transition from './pages/Transition'
// import MyClient from './pages/MyClient'
// import ClientSession from './pages/ClientSession'
// import LoginActivity from './pages/LoginActivity'
// import Rejected from './pages/Rejected'
// import Invoice from './pages/Invoice'
import Landing from './pages/LandingPage/Landing'
import Login from './pages/auth/Login'
import Singup from './pages/auth/Singup'
import ForgotPassword from './pages/auth/ForgotPassword'
import Profile from './pages/Profile'
import AccountEdit from './pages/AccountEdit'
import { ChatAccept, ChatReject, Initialize, UserUpdate } from './socket';
// import Model from './Components/Component/Model/Model';

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const a = async () => {
            const token = await localStorage.getItem("token")
            if (token) {
                dispatch(TokenLogin({ token })).then((e) => e.payload.success && navigate("/dashboard"))
            }
        }
        a()
    }, [])
    const { user } = useSelector((state) => state.Socket)

    return (
        <>
            {user._id && <Model user={user} />}
            <Routes>
                <Route exact path='/' element={< Landing />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/sign-up' element={<Singup />} />
                <Route exact path='/forgot-password' element={<ForgotPassword />} />
                <Route exact path='/*' element={<ProtectedRoutes >
                    <Routes>
                        <Route exact path='/dashboard' element={<Profile />} />
                        <Route exact path='/account/edit' element={<AccountEdit />} />
                        <Route exact path='/chat/:id' element={<Chats />} />
                        {/* <Route exact path='/current-chat' element={<Chats socketRef={socketRef} setChat={setChat} chat={chat} />} />
                        <Route exact path='/offline-request' element={<OffChats />} />
                        <Route exact path='/review' element={<Review />} />
                        <Route exact path='/sessions' element={<Sessions />} />
                        <Route exact path='/sessions/:id' element={<SessionsChat />} />
                        <Route exact path='/workflow' element={<Workflow />} />
                        <Route exact path='/salary' element={<Salary />} />
                        <Route exact path='/user-activity' element={<LoginActivity />} />
                        <Route exact path='/Transition' element={<Transition />} />
                        <Route exact path='/my-client' element={<MyClient />} />
                        <Route exact path='/my-client/:id' element={<ClientSession />} />
                        <Route exact path='/rejected' element={<Rejected />} />
                        <Route exact path='/invoice' element={<Invoice />} />
                         <Route exact path='/user-activity' element={<UserActivity />} /> 
                        <Route exact path='/*' element={<Error />} /> */}
                    </Routes>
                </ProtectedRoutes>} />
            </Routes>
        </>
    )
}
const Model = ({ user }) => {
    const [timer, setTimer] = useState(10);
    const { astro } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    if (timer === 0) {
        dispatch(ChatReject({ id: user._id }))
        dispatch(UserUpdate({}))

        // dispatch(Cancel({ astro: astro._id, user: userRequest._id, reason: "Astro Time Out" }))
        // socketRef.current.emit("rejectRequest", { clientId: userRequest._id, astro: astro._id })
        // setUserRequest({})
    }
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);

        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div style={{ position: "absolute", width: "500px", backgroundColor: "#d3dfe3", bottom: "10px", right: "10px", margin: "auto", borderRadius: "10px", padding: "25px 10px", zIndex: "200px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ height: "100px", width: "100px", borderRadius: "50%", border: `10px solid ${timer > 30 ? "#27ccb3" : timer > 15 ? "#2688eb" : "#eb2626"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ fontSize: "28px", color: "var(--dark)" }}>{timer}</p>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", flex: "1" }}>
                    <div style={{ height: "100px", width: "100px", borderRadius: "50%", overflow: "hidden", border: "1px solid red" }}>
                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                        {user.name}
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div onClick={() => {
                        dispatch(ChatReject({ id: user._id }))
                        dispatch(UserUpdate({}))
                    }} style={{ border: "2px solid var(--dark)", borderRadius: "6px", padding: "6px 20px", cursor: "pointer" }}>
                        Cancel
                    </div>
                    <div onClick={() => {

                        dispatch(ChatCreate({ userId: user._id, astroId: astro._id })).then((e) => {
                            if (e.payload.success) {
                                dispatch(ChatAccept({ user: e.payload.user }))
                                navigate(`/chat/${e.payload.astro.chat.chatId}?session=${e.payload.astro.chat.sessionId}`)
                                dispatch(UserUpdate({}))
                            }
                        })

                    }} style={{ background: "var(--dark)", color: "var(--white)", textAlign: "center", borderRadius: "6px", padding: "6px 20px", cursor: "pointer" }}>
                        Chat
                    </div>
                </div>
            </div>
        </>
    )
}
const Error = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh", width: "100vw" }}>
            <h1 style={{ fontSize: "5rem" }}>404</h1>
            <h6 style={{ fontSize: "3rem" }}>page Not Found</h6>
        </div>
    )
}


export default App
