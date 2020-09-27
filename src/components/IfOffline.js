import React, { useEffect, useState } from 'react'

export const IfOffline = ({children}) => {
    const [isOnline, setIsOnline] = useState(navigator ? navigator.onLine : true)

    const goOnline = () => setIsOnline(true)
    const goOffline = () => setIsOnline(false)

    useEffect(() => {
        if ( !window ) return
        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffline)

        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('offline', goOffline)
        }
    }, [])

    if (isOnline) {
        return null
    }
    return <span> {children} </span>
}