import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { userSession } from '../api/useReducer'
import styles from "./sessions/Sessions.module.css"
import { useState } from 'react'
import { FaRegStar, FaStar, FaEye } from 'react-icons/fa'

function ClientSession() {
    const { astro } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [session, setSession] = useState([])
    useEffect(() => {
        id && dispatch(userSession({ astro: astro._id, user: id })).then((e) => {
            if (e.payload.success) {
                setSession([...e.payload.sessions].reverse())
                //     setTotal(e.payload.sessions.reduce((accumulator, currentValue) => {
                //         return accumulator + currentValue.astroEarn;
                //     }, 0))
            }
        })

    }, [id])
    return (
        <>
            <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
                <div className={styles.sessions} style={{ overflow: "visible", }}>
                    <table style={{ overflow: "scroll !important" }}>

                        <thead>
                            <tr>
                                <th style={{ padding: "10px" }}>session id</th>
                                <th style={{ padding: "10px" }}>transition id</th>
                                <th style={{ padding: "10px" }}>Date/Time</th>
                                <th style={{ padding: "10px" }}>User</th>
                                <th style={{ padding: "10px" }}>Duration</th>
                                <th style={{ padding: "10px" }}>Earn</th>
                                <th style={{ padding: "10px" }}>Type</th>
                                <th style={{ padding: "10px" }}>View</th>
                            </tr>
                        </thead>

                        <tbody style={{ overflow: "scroll" }}>
                            {
                                session?.map((user, i) =>
                                    <tr key={user._id} style={{ cursor: "pointer" }}>
                                        <td style={{ textAlign: "center" }}>{user.id}</td>
                                        <td style={{ textAlign: "center" }}>{user.id + 1000}</td>
                                        <td style={{ textAlign: "center" }}>{user.createdAt.split("T").slice(0, 1)} , {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}</td>
                                        <td style={{ textAlign: "center" }}>{user.user.name} </td>
                                        <td style={{ textAlign: "center" }}> <span className="digits">
                                            {("0" + Math.floor((user.timeInSeconds / 60) % 60)).slice(-2)}:
                                        </span>
                                            <span className="digits">
                                                {("0" + Math.floor((user.timeInSeconds) % 60)).slice(-2)}
                                            </span></td>
                                        <td style={{ padding: "10px", textAlign: "center" }}>${parseFloat(user?.astroEarn.toFixed(2))}</td>
                                        <td style={{ padding: "10px", textAlign: "center" }}>{user.isOnline ? "Online" : "Offline"}</td>

                                        <td style={{ textAlign: "center" }}> <FaEye size={25} style={{ cursor: "pointer" }} onClick={() => navigate(`/sessions/${user._id}`)} /></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
                {/* 
               
            </div> */}
            </div>
        </>
    )
}

export default ClientSession
