import React, { ReactElement } from 'react'
import { Link } from 'wouter'

interface Props {
    link: string;
    Icon: any;
}

function ButtonNav({link, Icon}: Props): ReactElement {
    return (
        <>
        <Link href={link} > 
        <a href="#/" className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center m-2">                    
            <Icon size="2.3rem" color="rgba(209, 213, 219)"/>
        </a>
        </Link>
    </>
    )
}

export default ButtonNav
