import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { AdminFetchChat } from '../api/useReducer'
import { FaAngleLeft } from "react-icons/fa6";
function SessionsChat() {
    const { id } = useParams()
    const { astro, session } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const [singleSession, setSingleSession] = useState({})
    const [m, setM] = useState([])
    const endDate = new Date(singleSession.createdAt)
    const startDate = new Date(endDate.getTime() - (singleSession.timeInSeconds + 10) * 1000)
    const fm = m.filter((e) => {
        const date = new Date(e.createdAt)
        if (date > startDate && date < endDate) {
            return e
        }
    })
    const dispatch = useDispatch()
    useEffect(() => {
        singleSession._id && dispatch(AdminFetchChat({ astro: singleSession.astro?._id || singleSession.astro, user: singleSession.user?._id || singleSession.user })).then((e) => e.payload.success && setM(e.payload.messages))
    }, [singleSession])
    useEffect(() => {
        const sess = session.find((e) => e._id === id)
        if (sess?._id) {
            setSingleSession(sess)
        }
        else {
            alert("dispatch single sessions")
        }
    }, [id])
    return (
        <div style={{ height: "calc(100vh - 55px)", overflow: "scroll" }}>
            <div style={{ height: "70px", background: "var(--white)", alignItems: "center", padding: "0px 20px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }} onClick={()=>navigate(-1)}><FaAngleLeft /> Back</div>
                    <span style={{ fontWeight: "600", fontSize: "20px", textTransform: "uppercase" }}>

                        {singleSession?.user?.name}
                    </span>
                </div>
                <div>
                    <span className="digits">
                        {("0" + Math.floor((singleSession.timeInSeconds / 60) % 60)).slice(-2)}:
                    </span>
                    <span className="digits">
                        {("0" + Math.floor((singleSession.timeInSeconds) % 60)).slice(-2)}
                    </span>
                </div>
                <div style={{ fontWeight: "600", fontSize: "20px", textTransform: "uppercase" }}>
                    {singleSession.astro?.name || astro.name}
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minHeight: "calc(100% - 70px)", justifyContent: "flex-end", padding: "10px" }}>
                {
                    fm.map((e) => (<div style={{ gap: "2px", display: "flex", flexDirection: "column", alignItems: astro._id !== e.sender ? "flex-end" : "flex-start", maxWidth: "85%", alignSelf: astro._id !== e.sender? "flex-end" : "flex-start", }}
                    >

                        <p style={{ backgroundColor: astro._id === e.sender ? "#ffcaca" : "#cacaff", padding: "6px 15px", borderRadius: "6px", fontSize: "16px" }}>
                            {e.content}
                        </p>
                        <p style={{ color: "black", fontSize: "12px" }}>{e.createdAt.split("T").slice(0, 1)}  {new Date(e.createdAt).getHours()}:{new Date(e.createdAt).getMinutes()}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SessionsChat
