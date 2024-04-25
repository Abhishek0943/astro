import React, { useEffect } from 'react'
import styles from "./sessions/Sessions.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '../api/useReducer'
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
                            <th style={{ padding: "10px" }}>Type</th>
                            <th style={{ padding: "10px" }}>FeedBack</th>
                            <th style={{ padding: "10px" }}>Rating</th>
                            <th style={{ padding: "10px" }}>View</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflow: "scroll" }}>
                        {
                            s?.filter((e) => e.review.rating || e.review.comment).map((user, i) =>
                                <tr key={user._id} style={{ cursor: "pointer" }}>
                                    <td style={{ textAlign: "center" }}>{user.id}</td>
                                    <td style={{ textAlign: "center" }}>{user.createdAt.split("T").slice(0, 1)} , {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}</td>
                                    <td style={{ textAlign: "center" }}>{user?.user?.name} </td>

                                    <td style={{ padding: "10px", textAlign: "center" }}>{user.isOnline ? "Online" : "Offline"}</td>
                                    <td style={{}}>{user.review.user ?
                                        <>
                                            <p style={{ textAlign: "center", display: "flex", alignItems: "flex-start", gap: "3px", justifyContent: "center" }}>
                                                <span style={{ fontWeight: "700" }}>User : </span>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                                                    {user.review.comment}
                                                </div>
                                            </p>
                                        </>
                                        : user.reason !== "NaN" ?
                                            <>
                                                <p style={{ textAlign: "center" }}>
                                                    <span style={{ fontWeight: "700" }}>Astro : </span>
                                                    <span>{user.reason}</span>
                                                </p>
                                            </>
                                            :
                                            <></>}</td>

                                    <td style={{ textAlign: "center" }}> {user.review.rating}</td>
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
