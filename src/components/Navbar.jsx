import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>

            <nav className=' text-6xl bg-black text-white gap-2 flex flex-row justify-center w-full h-full z-20  '>

                <br />
                <Link to="/page1">p1</Link>
                <br />
                <Link to="/page2">p2</Link>
                <br />
                <Link to="/page3">p3</Link>
                <br />
                <Link to="/page4">p4</Link>
                <br />

            </nav>



        </>
    )
}

export default Navbar