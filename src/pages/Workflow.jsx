import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { astroGetAllOffChat } from '../api/useReducer'

function Workflow() {
    const navigate = useNavigate()
    const { astro, session } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [chats, setChats] = useState([])
    useEffect(() => {
        astro._id && dispatch(astroGetAllOffChat({ id: astro._id })).then((e) => {
            e.payload?.success && setChats(e.payload.chat)
        })
    }, [astro])
    return (
        <>
            <div className='chatsdjs' style={{ height: "100%", flex: "1", overflow: "hidden", width: "95%", margin: "auto" }}>
                <h2 style={{ width: "95%", margin: "auto", marginTop: "20px", padding: "10px 20px", }}>Workflow</h2>

                <div id='workflow' style={{ background: "var(--white)", marginTop: "20px", flexWrap: "wrap", padding: "0px 20px", gap: "2%", display: "flex", height: "auto" }} >
                    <div onClick={() => navigate("/chat-history")} style={{ cursor: "pointer", flex: "1", minWidth: "200px", background: "#f9b0b0", display: "flex", alignItems: "center", margin: "20px 0px", justifyContent: "center", height: "50px", borderRadius: "10px", maxWidth: "400px" }}>Chat History</div>
                    <div onClick={() => navigate("/offline-request")} style={{ position: "relative", cursor: "pointer", flex: "1", minWidth: "200px", background: "#f7f796", display: "flex", alignItems: "center", margin: "20px 0px", justifyContent: "center", height: "50px", borderRadius: "10px", maxWidth: "400px" }}>Offline Requests <span style={{ position: "absolute", bottom: "5px", height: "26px",display:"flex", alignItems:"center", justifyContent:"center", fontSize:"16px",fontWeight:"600", aspectRatio: "1", borderRadius: "50%", background: "#76e3dc", right: "5px" }}>{chats.length}</span></div>
                    <div onClick={() => navigate("/sessions")} style={{ cursor: "pointer", flex: "1", minWidth: "200px", background: "#9d9df4", display: "flex", alignItems: "center", margin: "20px 0px", justifyContent: "center", height: "50px", borderRadius: "10px", maxWidth: "400px" }}>Session</div>
                    <div onClick={() => navigate("/current-chat")} style={{ cursor: "pointer", flex: "1", minWidth: "200px", background: "#9d9df4", display: "flex", alignItems: "center", margin: "20px 0px", justifyContent: "center", height: "50px", borderRadius: "10px", maxWidth: "400px" }}>Current Chat </div>
                </div>
            </div>
        </>
    )
}

export default Workflow
