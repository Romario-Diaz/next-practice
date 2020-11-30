import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const About = () => {

    useEffect(() => {
        axios.get("http://localhost:3000/api/prueba").then((result) =>{
            console.log("esto esta trayendo : ", result)
        })
    },[])

    return (
        <>
            <Navbar />
            <h1>Hola about</h1>
        </>

    )
}

export default About