import React, { ReactElement } from 'react'
import { AiFillHome, AiOutlineIdcard } from "react-icons/ai"
import Button from "./Button-nav"
function Layout({ children  }: {children: any}): ReactElement {
    
    return (
        <>
            <nav className="fixed w-screen h-24 bg-gray-600 flex flex-row items-center pl-8">
                <Button link="/" Icon={AiFillHome}/>
                <Button link="/cards" Icon={AiOutlineIdcard}/>
            </nav>
            <main className="App h-screen flex items-center justify-center flex-col  bg-gray-500 px-3">
                {children}
            </main>
        </>
    )
}

export default Layout
