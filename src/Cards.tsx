import React, { ReactElement } from 'react'
import { SimpleCard, SimpleCardPhoto } from './cards/SimpleCard'

function Cards(): ReactElement {
    const headingClasses = "text-2xl text-gray-100 mb-4 font-medium mt-6";
    return (
        <>
            <h2 className={headingClasses}>1. Simple Card</h2>
            <SimpleCard/>
            <h2 className={headingClasses}>2. Simple Card with photo</h2>
            <SimpleCardPhoto/>
        </>
    )
}

export default Cards
