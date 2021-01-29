import React from 'react'
import CardBlog from '../components/CardBlog'
import Footer from '../components/Footer'
import HeaderLibrary from '../components/HeaderLibrary'
import Navbar2 from '../components/Navbar2'

function Library() {
    return (
        <div>
            <Navbar2 />
            <HeaderLibrary/>
            <CardBlog />
            <Footer/>
        </div>
    )
}

export default Library
