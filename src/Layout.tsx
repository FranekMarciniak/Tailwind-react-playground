import React, { ReactElement } from 'react'

function Layout({ children  }: {children: any}): ReactElement {
    return (
        <div className="App flex items-center justify-center h-screen bg-gray-500 flex-col">
            {children}
        </div>
    )
}

export default Layout
