import React, { useState } from 'react'
import styles from "./Dashboard.module.css"
import { IoIosLogIn } from "react-icons/io";
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../../components/ProtectedRoutes/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchOutline } from "react-icons/io5";
import { uploadImage } from '../../api/useReducer';

function Dashboard() {
  const { astro } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <h2 style={{ width: "95%", margin: "auto", marginTop: "20px", padding: "10px 20px", }}>Profile</h2>

      <div id='profile' style={{ background: "var(--white)" }} className={styles.dashboard}>
        <div className={styles.left}>
          <div style={{ width: "100%", overflow: "hidden", aspectRatio: "1", backgroundColor: "red", borderRadius: "3%" }}>
            <img src={astro?.avatar?.url} style={{ height: "100%", width: "100%" }} alt="" />
          </div>

        </div>
        <div className={styles.right}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} >
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name</label>
              <p>{astro.name}</p>
            </div><div className={styles.inputContainer}>
              <label htmlFor="name">Email</label>
              <p>{astro.email}</p>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Number</label>
              <p>{astro.number}</p>
            </div>


            <div className={styles.inputContainer}>
              <label htmlFor="country">country</label>
              <p>{astro.country}</p>

            </div> <div className={styles.inputContainer}>
              <label htmlFor="dateOfBirth">dateOfBirth</label>
              <p>{astro.dob}</p>

            </div><div className={styles.inputContainer}>
              <label htmlFor="price">price</label>
              <p>{astro.earnPrice}</p>

            </div>
          </div>
          <div className={styles.inputContainer}>
              <label htmlFor="category">Category</label>
              <p>{astro.category.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < astro.category.length - 1 && ','} {/* Add a comma if it's not the last item */}
                </span>
              ))}</p>

            </div>
          <div className={styles.inputContainer}>
            <label htmlFor="bio">bio</label>
            <p>{astro.bio}</p>
          </div>
        </div>
      </div>      
     </>
  )
}

export default Dashboard
