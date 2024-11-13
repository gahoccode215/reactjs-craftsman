import React from 'react'
import { UserProvider } from './components/UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'

const App = () => {
    return (
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
    )
}

export default App;