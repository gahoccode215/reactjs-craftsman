import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
        console.log("BaaiscEffect component mounted")
    }, [])
    return (
        <div>
            <h1>Check the console to see the useEffect</h1>
        </div>
    )
}

export default BasicEffect