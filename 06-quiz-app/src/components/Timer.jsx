import React, { useEffect, useState } from 'react'

const Timer = ({timeout, onTimeout}) => {
    const [timeRemaining, setTimeRemaining] = useState(timeout)

    useEffect(() => {
        // console.log('setting timer')
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        // console.log('setting interval')

        const interval = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 100)
        }, 100)
        return () => {
            clearInterval(interval)
        }
    },[])
    
    useEffect(() => {
        console.log(timeRemaining)

    }, [timeRemaining])
    
  return <>
    {/*<p>{timeRemaining}</p>*/}
    <progress max={timeout} value={timeRemaining} />
    </>

}

export default Timer
