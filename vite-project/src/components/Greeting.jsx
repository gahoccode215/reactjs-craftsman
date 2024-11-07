import React from 'react'

export const Greeting = ({timeOfDay}) => {
    return timeOfDay === "Moring" ? <h1>Good Morning</h1> : <h1>Good Afternoon</h1>
}
