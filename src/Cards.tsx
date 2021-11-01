import React, { ReactElement } from 'react'
import SimpleCard from './cards/SimpleCard'

function Cards(): ReactElement {
    const headingClasses = "text-2xl text-gray-100 mb-4 font-medium";
    return (
        <>
            <h2 className={headingClasses}>1. Simple Card</h2>
            <SimpleCard/>
        </>
    )
}

export default Cards
