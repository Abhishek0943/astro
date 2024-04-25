import React, { useEffect } from 'react'
import styles from "./Sessions.module.css"
import NavBar from '../../components/ProtectedRoutes/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../../api/useReducer'
import { useNavigate } from "react-router-dom"
import { FaRegStar, FaStar, FaEye } from 'react-icons/fa'
function Sessions() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { astro, session } = useSelector((state) => state.user)
    const s = [...session].reverse()
    useEffect(() => {
        astro._id && dispatch(getSession({ id: astro._id }))
    }, [astro])
    return (
        <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
            <div className={styles.sessions} style={{ overflow: "visible", }}>
                <table style={{ overflow: "scroll !important" }}>

                    <thead>
                        <tr>
                            <th style={{ padding: "10px" }}>session id</th>
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
                            s?.map((user, i) =>
                                <tr key={user._id} style={{ cursor: "pointer" }}>
                                    <td style={{ textAlign: "center" }}>{user.id}</td>
                                    <td style={{ textAlign: "center" }}>{user.createdAt.split("T").slice(0, 1)} , {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}</td>
                                    <td style={{ textAlign: "center" }}>{user?.user?.name} </td>
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
    )
}
export const Star = ({ rating }) => {

    return (
        <>
            {[...Array(5)].map((e, i) => {
                return (
                    <>
                        {(i + 1) > rating ? <FaRegStar /> : <FaStar />}
                    </>
                )
            })}
        </>
    )
}
export default Sessions
