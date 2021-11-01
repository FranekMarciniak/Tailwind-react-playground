import React, { ReactElement } from 'react'
import { Link } from "wouter";

function Home(): ReactElement {
    return (
        <>
            <h1 className="text-gray-100 text-4xl m-12 text-center">Landing page</h1>
            <p className="text-gray-100 text-xl mt-2 mb-12 max-w-2xl text-center"> This is just a simple sandbox to testout tailwind with react, feel free to look around &lt;3 </p>
        </>
    )
}

export default Home
