import React from 'react'
import SideMenu from '../../components/SideMenu'
import "./home.css"
import Navbar from '../../components/NavBar'

const Home = () => {
    return (
        <div className="Home">
            <SideMenu />
            <div className='homecontainer'>
                <Navbar />
            </div>
        </div>
    )
}

export default Home;
