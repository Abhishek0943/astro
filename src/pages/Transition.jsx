import React from 'react'
import styles from "./sessions/Sessions.module.css"
import NavBar from '../components/ProtectedRoutes/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { GetInvoice, getSession } from '../api/useReducer'
import { useNavigate } from "react-router-dom"
import { FaRegStar, FaStar, FaEye } from 'react-icons/fa'
import { useEffect } from 'react'
import { useState } from 'react'
function Transition() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { astro, session } = useSelector((state) => state.user)
    const [invoice, setInvoice] = useState([])
    const [s, sets] = useState([])
    useEffect(() => {
        astro._id && dispatch(getSession({ id: astro._id }))
        astro._id && dispatch(GetInvoice({ id: astro._id })).then((e) => {
            setInvoice(e.payload.invoice)
        })
    }, [astro])
    useEffect(() => {
        const d = [...session, ...invoice]
        const sortedArray = d.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA - dateB;
        });
        const h = [...d].reverse()
        sortedArray.length > 0 && sets(h)
    }, [session, invoice])
    return (
        <div className={styles.wrapper} style={{ overflow: "scroll", height: "calc(100vh - 55px)" }}>
            <div className={styles.sessions} style={{ overflow: "visible", }}>
                <table style={{ overflow: "scroll !important" }}>

                    <thead>
                        <tr>
                            <th style={{ padding: "10px" }}>Transition Id </th>
                            <th style={{ padding: "10px" }}>Date/Time</th>
                            <th style={{ padding: "10px" }}>User</th>
                            <th style={{ padding: "10px" }}>Duration</th>
                            <th style={{ padding: "10px" }}>Earn</th>
                            <th style={{ padding: "10px" }}>Balance</th>
                        </tr>
                    </thead>

                    <tbody style={{ overflow: "scroll" }}>
                        {
                            s.map((user, i) =>
                                <tr key={user._id} style={{ cursor: "pointer" }}>
                                    <td style={{ textAlign: "center" }}>{user.id + 1000}</td>
                                    <td style={{ textAlign: "center" }}>{user.createdAt.split("T").slice(0, 1)} , {new Date(user.createdAt).getHours()}:{new Date(user.createdAt).getMinutes()}</td>
                                    <td style={{ textAlign: "center" }}>{user?.user?.name} </td>
                                    <td style={{ textAlign: "center" }}>
                                        {
                                            user.timeInSeconds && <>


                                                <span className="digits">
                                                    {("0" + Math.floor((user.timeInSeconds / 60) % 60)).slice(-2)}:
                                                </span>
                                                <span className="digits">
                                                    {("0" + Math.floor((user.timeInSeconds) % 60)).slice(-2)}
                                                </span>
                                            </>
                                        }
                                    </td>
                                    <td style={{ padding: "10px", textAlign: "center" }}>{user?.astroEarn ? `$${parseFloat(user?.astroEarn.toFixed(2))}` : `-$${user?.amount}`}</td>
                                    <td style={{ padding: "10px", textAlign: "center" }}>${user?.astroPrevBalance ? parseFloat(user?.astroPrevBalance.toFixed(2)) : user?.balance}</td>
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

export default Transition
