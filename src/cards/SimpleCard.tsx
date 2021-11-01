import React, { ReactElement } from 'react'

function SimpleCard(): ReactElement {
    return (
        <>
            <div className="bg-white rounded-lg shadow-xl md:w-3/6 md:max-w-lg max-w-none w-5/6">
                <header className="px-8 py-4 bg-gray-200 rounded-t-lg text-xl font-semibold">I am a card</header>
                <div className="px-8 py-4 h-32"> 
                    <p>This is card content</p>
                </div>
                <footer className="px-8 py-3 bg-gray-200 rounded-b-lg text-sm text-right font-light">Added 3 hours ago</footer>
            </div>
        </>
    )
}

export default SimpleCard
