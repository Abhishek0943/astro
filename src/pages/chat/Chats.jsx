import React from 'react'
import styles from "./Chats.module.css"
// import NavBar from '../../components/ProtectedRoutes/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { CiChat1 } from "react-icons/ci";
import { useState } from 'react'
import { HiXMark } from "react-icons/hi2";
import { ClientRequestsRemove, FetchChat, FetchMessage, MessageHandler, StopChat, busy } from '../../api/useReducer';
import { IoSearchOutline } from "react-icons/io5";
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { SendMessage } from "../../socket"

function Chats() {
    // const { astro, allMessages, UserSession } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const { astro, messages } = useSelector((state) => state.user)
    const { id } = useParams()
    const { socketData } = useSelector((state) => state.Socket)
    const { id: chatId } = useParams()
    const [message, setMessage] = useState([...messages])
    useEffect(() => {
        socketData?.on("messageReceive", (user) => {
            setMessage((prev) => [...prev, user])
        })
        socketData?.on("chatEnded", () => {
            alert("chachatEnded")
            // setMessage((prev) => [...prev, user])
        })
        return () => {
            socketData?.off("messageReceive")
            socketData?.off("chatEnded")
        }
    }, [])
    useEffect(() => {
        dispatch(FetchMessage({ id: chatId }))
    }, [chatId])
    useEffect(() => {
        setMessage([...messages])
    }, [messages])

    // const [d, setd] = useState(false)
    // const [to, setTo] = useState(0)
    // const [ab, seta] = useState(chat?.user?.bonus > 0 ? chat?.user?.bonus - chat?.user?.balance : chat?.user?.balance)
    // const [bb, setbb] = useState(chat?.user?.bonus > 0 ? chat?.user?.bonus : 0)
    // useEffect(() => {
    //     chat._id && dispatch(FetchMessage({ id: chat._id }))
    //     if (!chat._id) {
    //         setTime(0)
    //         setModel(false)
    //         setEarn(0)
    //         setd(true)
    //         setTimeout(() => {
    //             setd(false)
    //         }, 3000);
    //     }
    // }, [chat])
    // useEffect(() => {
    // if (astro?._id) {
    //     socketRef.current?.on("message received", (newMessageReceived) => {
    //         setTo(0)
    //         dispatch(MessageHandler(newMessageReceived))
    //     })
    //     socketRef.current?.on("scopedTime", (newMessageReceived) => {
    //         setStop(true)
    //     })
    // }
    // })
    // const a = ["Technical issues at client side", "Client is not Responding", "Technical issues at Astrologer side", "Client is abusive", 'Client does not trust my work',]
    // const [time, setTime] = useState(0)
    // const [stop, setStop] = useState(false)
    // const [earn, setEarn] = useState(0)
    // const [model, setModel] = useState(false)
    // const [send, setSend] = useState(true)
    // useEffect(() => {
    //     let interval = null;
    //     if (!stop && chat._id) {
    //         interval = setInterval(() => {
    //             setTime((prevTime) => {
    //                 let a = Math.ceil(prevTime / 60) * astro.earnPrise


    // }
    //                 setEarn(a.toFixed(2))
    //                 return prevTime + 1;
    //             });
    //         }, 1000);
    //     }
    //     else {
    //         clearInterval(interval);
    //     }
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [stop, chat]);
    // const [value, setValue] = useState("")
    // const [userProfile, setUserProfile] = useState(false)
    // useEffect(() => {
    //     chat?._id && setInterval(() => {
    //         setTo((prevTime) => {
    //             return prevTime + 1;
    //         });
    //     }, 1000);
    // }, [chat])
    // useEffect(() => {
    //     if (to === 60) {
    //         setStop(true)
    //         socketRef.current.emit("stopChat", { id: chat.user._id })
    //         dispatch(busy({ id: astro._id, work: "Online" }))
    //         dispatch(StopChat({ astroId: astro._id, value: "Time Out", userId: chat.user._id, time, price: astro.chargePrise })).then((e) => {
    //             e?.payload?.success && setChat({})
    //             window.location.reload();
    //         })
    //         setChat({})
    //     }
    // }, [to])
    // const scrollableDivRef = useRef(null);
    // useEffect(() => {
    //     if (scrollableDivRef.current) { scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight }
    // }, [allMessages]);
    // const stopChatFun = () => {
    //     socketRef.current.emit("stopChat", { id: chat.user._id })
    //     dispatch(busy({ id: astro._id, work: "Online" }))
    //     dispatch(StopChat({ astroId: astro._id, value, userId: chat.user._id, time, price: astro.chargePrise })).then((e) => {
    //         e?.payload?.success && setChat({})
    //         window.location.reload();
    //     })
    // }
    return (
        <>
            {/* <div style={{ height: "100vh", width: "100vw", position: "fixed", top: "0px", zIndex: "9999", backgroundColor: "rgba(0, 0,0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ background: "white", height: "auto", gap: "15px", maxWidth: "440px", width: "90%", margin: "auto", borderRadius: "10px", padding: "15px 10px", display: "flex", flexDirection: "column" }}>
                        <h2 style={{ fontSize: "22px" }}>Stop chat</h2>
                        <p style={{ color: "black", fontSize: "16px" }}>Reason</p>
                        <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px" }}>
                            {
                                a.map((e) => (
                                    <p onClick={() => setValue(e)} style={{ borderRadius: "100px", border: "1px solid gray", padding: "6px 20px", cursor: "pointer", textOverflow: "ellipsis", whiteSpace: "nowrap", background: value === e && "green", color: value === e ? "white" : "black " }}>{e}</p>
                                ))
                            }
                        </div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div onClick={() => setModel(false)} style={{ padding: "6px 15px", cursor: "pointer", borderRadius: "6px", fontWeight: "500", backgroundColor: "gray", color: "white" }}>Cancel</div>
                            <div onClick={() => {
                                setModel(false)
                                if (value) {
                                    setStop(true)
                                    stopChatFun()
                                    // socketRef.current?.emit("stopChat", { id: chat.user._id, value })
                                    setChat({})
                                }
                            }} style={{ padding: "6px 15px", cursor: "pointer", borderRadius: "6px", background: "red", fontWeight: "500", color: "white" }}>Stop</div>
                        </div>
                    </div>
                </div> */}

            <div style={{ height: "100vh", backgroundColor: "white" }}>
                <div style={{ width: "100%", display: "flex", padding: "10px 20px", gap: "10px", backgroundColor: "#f5f5f5", textTransform: "capitalize" }}>
                    <button onClick={() => {
                        // dispatch(EndChat({
                        //     id: user.chat.astroId, callback: () => {
                        //         dispatch(StopChat({ sessionId: user.chat.sessionId })).then((e) => {
                        //             if (e.payload.success) {
                        //                 dispatch(UpdateUserPayload(e.payload.user))
                        //             }
                        //             else {
                        //                 window.location.reload()
                        //             }
                        //             setModel(true)
                        //         })
                        //     }
                        // }))
                    }} style={{ border: "none", outline: "none", backgroundColor: "var(--white-two)", padding: "6px 15px", borderRadius: "6px", cursor: "pointer" }}>End Chat</button>
                    {/* {
                        !user?.chat?.chatId &&
                        <button onClick={() => {
                            setModel(true)
                        }} style={{ border: "none", outline: "none", backgroundColor: "var(--white-two)", padding: "6px 15px", borderRadius: "6px", cursor: "pointer" }}>Give Review</button>
                    } */}
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ height: "100%", display: "flex", padding: "50px", background: "var(--bg-white)", flexDirection: "column", justifyContent: "flex-end", gap: "3px", border: "1px solid gray", borderRadius: "10px" }}>
                        {message?.map((e, i) => (<div style={{ display: "flex", flexDirection: "column" }} key={e._id}>
                            {
                                new Date(message[i - 1]?.createdAt).getDate() !== new Date(e.createdAt).getDate() &&
                                <div style={{ borderRadius: "5px", background: "#f2ecec", fontSize: "0.8rem", padding: "3px 10px", margin: "auto", position: "relative", }}>{new Date(e.createdAt).toLocaleDateString()}</div>
                            }
                            <div style={{ margin: "0px 10px", gap: "2px", display: "flex", flexDirection: "column", alignItems: astro._id === e.sender ? "flex-end" : "flex-start", maxWidth: "85%", alignSelf: astro._id === e.sender ? "flex-end" : "flex-start", }}>
                                <p style={{ backgroundColor: astro._id !== e.sender ? "#ffcaca" : "#cacaff", padding: "6px 15px", borderRadius: "6px", fontSize: "16px" }}>
                                    {e.content}
                                </p>
                                <p style={{ color: "black", fontSize: "12px" }}>{new Date(e.createdAt).toLocaleTimeString([], { timeStyle: 'short' })}</p>
                            </div>

                        </div>
                        ))}
                    </div>
                    <div style={{ width: "100%", display: "flex", padding: "10px 20px", gap: "10px", backgroundColor: "#f5f5f5", textTransform: "capitalize" }}>
                        <input value={content}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && content) {
                                    const m = {
                                        content,
                                        sender: astro._id,
                                        createdAt: new Date(),
                                        session: astro.chat.sessionId,
                                        chat: astro.chat.chatId
                                    }
                                    setMessage([...message, m])
                                    dispatch(SendMessage({ message: m, id: astro.chat.userId }))
                                    setContent("")
                                }
                            }}
                            onChange={(e) => setContent(e.target.value)} type="text" style={{ border: "none", outline: "none", width: "100%", padding: "8px 10px", borderRadius: "6px" }} name="" id="" />
                        <button onClick={(e) => {
                            if (content) {
                                const m = {
                                    content,
                                    sender: astro._id,
                                    createdAt: new Date(),
                                    session: astro.chat.sessionId,
                                    chat: astro.chat.chatId
                                }
                                setMessage([...message, m])
                                console.log(astro)
                                dispatch(SendMessage({ message: m, id: astro.chat.userId }))
                                setContent("")
                            }
                        }} style={{ border: "none", outline: "none", backgroundColor: "var(--yellow)", padding: "6px 15px", borderRadius: "6px", cursor: "pointer" }}>Send</button>
                    </div>
                </div>

            </div >
            {/* {
                d &&
                <div style={{ position: "absolute", width: "500px", backgroundColor: "#d3dfe3", top: "10px", right: "0px", left: "0px", margin: "auto", borderRadius: "10px", padding: "25px 10px", zIndex: "100px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", flex: "1" }}>
                        <div style={{ height: "100px", width: "100px", borderRadius: "50%", overflow: "hidden" }}>
                        </div>

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ textAlign: "center" }}>
                            The chat has been ended from client side, works done after this will be not paid. you can reply to this chat on chat history
                        </div>
                        <div onClick={() => {

                        }} style={{ background: "var(--dark)", width: "100px", margin: "auto", color: "var(--white)", textAlign: "center", borderRadius: "6px", padding: "6px 20px", cursor: "pointer" }}>
                            okay
                        </div>
                    </div>
                </div>
            } */}

        </>
    )
}
const ChatRequest = ({ socketRef }) => {
    const { ClientRequests, astro } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { socketData } = useSelector((state) => state.Socket)

    useEffect(() => {
        socketData?.on("message", (user) => {
            console.log(user)
        })
    })
    return (
        <>
            <div style={{ flex: "1", backgroundColor: "white", width: "95%", margin: "auto", borderRadius: "10px", }}>
                <div style={{ padding: "30px 20px" }}>
                    <button style={{ border: "2px solid var(--dark)", borderRadius: "10px", padding: "5px 15px", cursor: "pointer", background: "var(--bg-white)" }}> Sort By</button>
                </div>
                <div className={styles.listCon} style={{}}>
                    <div style={{ height: "50px", width: "100%", backgroundColor: "var(--yellow)", display: "flex", gap: "20px", alignItems: "center", padding: "0px 20px" }}>
                        <div style={{ width: "30px", fontWeight: "700" }}>
                            S.N.
                        </div>
                        <div style={{ width: "100px", fontWeight: "700" }}>
                            User
                        </div>
                        <div style={{ fontWeight: "700" }}>
                            Action
                        </div>
                    </div>
                    {
                        ClientRequests.map((e, i) => (
                            <div key={i} style={{ height: "50px", width: "100%", display: "flex", gap: "20px", alignItems: "center", padding: "0px 20px" }}>
                                <div style={{ width: "30px", fontWeight: "500" }}>
                                    {i + 1}.
                                </div>
                                <div style={{ width: "100px" }}>
                                    {e.name}
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <CiChat1 size={25} style={{ cursor: "pointer", }} onClick={() => socketRef.current.emit("acceptRequest", { clientId: e._id, astro })} />
                                    <HiXMark size={25} style={{ cursor: "pointer", }} onClick={() => {
                                        dispatch(ClientRequestsRemove(e._id))
                                        socketRef.current.emit("rejectRequest", { clientId: e._id, astro: astro._id })
                                    }} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}
export default Chats
