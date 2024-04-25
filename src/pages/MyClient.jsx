import React from 'react'
import styles from "./sessions/Sessions.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FetchChat, getSession, userSession } from '../api/useReducer'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function MyClient() {
    const { astro } = useSelector((state) => state.user)
    const { chats, allMessages, UserSession } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [session, setSession] = useState([])
    const s = [...session].reverse()
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        // dispatch(FetchChat({ _id: astro._id }))

    }, [])
    // console.log(users)
    useEffect(() => {
        const b = () => {
            var a = [];
            session.forEach((e, i) => {
                if (i === 0) {
                    a = [e.user];
                } else {
                    if (e?.user) {
                        // Check if the user is not already in the 'a' array
                        const userNotInArray = a.every((j) => e.user._id !== j._id);
                        if (userNotInArray) {
                            a = [...a, e.user];
                        }
                    }
                }
            });
            setUsers(a);
        };

        // Only call b() if users.length is 0
        if (users.length === 0) {
            b();
        }
    }, [session, users]);
    useEffect(() => {
        astro._id && dispatch(getSession({ id: astro?._id })).then((e) => {
            setSession(e.payload?.sessions)
        })
    }, [astro])
    return (
        <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
            <div className={styles.sessions} style={{ overflow: "visible", }}>
                <table style={{ overflow: "scroll !important" }}>

                    <thead>
                        <tr>
                            <th style={{ padding: "10px" }}>User Id </th>
                            <th style={{ padding: "10px" }}>user name</th>
                            <th style={{ padding: "10px" }}>Zodiac</th>
                            <th style={{ padding: "10px" }}>Birth Place</th>
                            <th style={{ padding: "10px" }}>Total Earning</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflow: "scroll" }}>
                        {
                            users.map((user, i) =>
                                <tr key={user?._id} style={{ cursor: "pointer" }}>
                                    <td style={{ textAlign: "center" }}>{user?.id}</td>
                                    <td style={{ textAlign: "center" }}><span onClick={() => navigate(`/my-client/${user._id}`)} style={{ cursor: "pointer" }}>{user?.name}</span></td>
                                    <td style={{ textAlign: "center" }}>{user?.zodiac} </td>
                                    <td style={{ textAlign: "center" }}>{user?.bp} </td>
                                    <td style={{ padding: "10px", textAlign: "center" }}><TotalEarning user={user} /></td>
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
const TotalEarning = ({ user }) => {
    const { astro } = useSelector((state) => state.user)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userSession({ astro: astro?._id, user: user?._id })).then((e) => {
            if (e.payload.success) {
                setTotal(e.payload.sessions.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.astroEarn;
                }, 0))
            }
        })

    }, [])
    return (
        <>
            {parseFloat(total.toFixed(2))}
        </>
    )
}
export default MyClient
