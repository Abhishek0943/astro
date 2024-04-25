import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { LogActive, userSession } from '../api/useReducer'
import styles from "./sessions/Sessions.module.css"
import { useState } from 'react'
import { FaRegStar, FaStar, FaEye } from 'react-icons/fa'

function ClientSession() {
    const { astro } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [session, setSession] = useState([])

    useEffect(() => {
        dispatch(LogActive({ id: astro._id })).then((e) => {
            if (e.payload.success) {
                setSession([...e.payload.logs])
                console.log(e.payload.logs)
            }
        })

    }, [])
    return (
        <>
            <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
                <div className={styles.sessions} style={{ overflow: "visible", }}>
                    <table style={{ overflow: "scroll !important" }}>

                        <thead>
                            <tr>
                                <th style={{ padding: "10px" }}>Type</th>
                                <th style={{ padding: "10px" }}>Start</th>
                                <th style={{ padding: "10px" }}>Activity</th>

                            </tr>
                        </thead>

                        <tbody style={{ overflow: "scroll" }}>
                            {
                                session?.map((user, i) =>
                                    <tr key={user._id} style={{ cursor: "pointer" }}>
                                        <td style={{ textAlign: "center" }}>{user.type}</td>
                                        <td style={{ textAlign: "center" }}>{user.createdAt.split("T").slice(0, 1)} , {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}:{new Date(user.createdAt).getSeconds()}</td>
                                        <td style={{ textAlign: "center" }}>{user?.endAt && user.endAt.split("T").slice(0, 1)} , {new Date(user?.endAt).getHours()}:{new Date(user?.endAt).getMinutes()}:{new Date(user?.endAt).getSeconds()}</td>
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
