import React, { ReactElement } from 'react'
import { Link } from "wouter";

function Home(): ReactElement {
    return (
        <>
        <h1 className="text-gray-100 text-5xl m-12">Landing page</h1>
        <Link href="cards" >
          <a className=" text-gray-200 text-2xl m-2 p-2 border-2
           hover:shadow-xl transition duration-500 ease-in-out">Go to cards showcase</a>
        </Link>
        </>
    )
}

export default Home
