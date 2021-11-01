import React, { ReactElement } from 'react'

export function SimpleCard(): ReactElement {
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


export function SimpleCardPhoto(): ReactElement {
    return (
        <>
            <div className="bg-white rounded-lg shadow-xl md:w-3/6 md:max-w-lg max-w-none w-5/6 flex flex-col">
                <div className="flex flex-col sm:flex-row">
                    <img className="w-30 h-60 object-cover object-top rounded-t-lg sm:rounded-tl-lg sm:rounded-tr-none" src="https://pbs.twimg.com/media/FCh3lVzUcAIbVOf?format=jpg&name=small"/>
                    <div className="h-32 w-full "> 
                        <header className="px-8 py-4 bg-gray-200 md:rounded-tr-lg text-xl font-semibold">I am a card</header>
                        <p className="px-8 py-4">This is card content</p>
                    </div>
                </div>

                <footer className="px-8 py-3 bg-gray-200 rounded-b-lg text-sm text-right font-light">Added 3 hours ago</footer>
            </div>
        </>
    )
}


