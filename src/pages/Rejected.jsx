import React from 'react'
import styles from "./sessions/Sessions.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FetchChat, getCancel, getSession, userSession } from '../api/useReducer'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function MyClient() {
    const { astro } = useSelector((state) => state.user)
    const [session, setSession] = useState([])
    const dispatch = useDispatch()
    const a = [...session].reverse()
    useEffect(() => {
        astro._id && dispatch(getCancel({ id: astro._id })).then((e) => {
            setSession(e.payload?.a)
        })
    }, [astro])
    return (
        <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
            <div className={styles.sessions} style={{ overflow: "visible", }}>
                <table style={{ overflow: "scroll !important" }}>

                    <thead>
                        <tr>
                            <th style={{ padding: "10px" }}>S.N.</th>
                            <th style={{ padding: "10px" }}>User</th>
                            <th style={{ padding: "10px" }}>Reason</th>
                            <th style={{ padding: "10px" }}>Date/time</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflow: "scroll" }}>
                        {
                            a?.map((user, i) =>
                                <tr key={user?._id} style={{ cursor: "pointer" }}>
                                    <td style={{ textAlign: "center" }}>{i + 1}</td>
                                    <td style={{ textAlign: "center" }}>{user?.user?.name}</td>
                                    <td style={{ textAlign: "center" }}>{user.reason}</td>
                                    <td style={{ textAlign: "center" }}>{user?.createdAt && <>{user.createdAt?.split("T").slice(0, 1)}  {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}</>} </td>
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

export default MyClient
