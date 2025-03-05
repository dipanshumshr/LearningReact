import React, { useEffect, useRef, useState } from 'react'
import Result from './Result'

function TimerChallenge({ title , timeDuration }) {
    let timer = useRef(null)
    let resultRef = useRef(null);

    const [timeRemaining,setTimeRemaining] = useState(timeDuration*1000);
    const [timerRunning,setTimerRunning] = useState(false)
   
   useEffect(()=>{
    if(timeRemaining<=0)
        {
            clearInterval(timer.current);
            resultRef.current?.open();
            setTimerRunning(false);
        }
   },[timeRemaining,timeDuration])

   const handleReset = () => {
    setTimeRemaining(timeDuration* 1000);
   }
   

    const handleStart = () => {
        timer.current = setInterval(()=>{
                setTimeRemaining(prev => prev-100);
        },(100))
        setTimerRunning(true);
    }

    const handleStop = () => {
        clearInterval(timer.current);
        resultRef.current.open();
        setTimerRunning(false);
    }

    const resultText = () => {
        if(timeRemaining<=100 && timeRemaining >=0)
        {
            return "Won";
        }
        else 
        {
            return "Lost"
        }

    }

  return (
    <>
    <Result ref={resultRef} result={resultText()} targetTime={timeDuration} timeRemaining = {timeRemaining} resetTimer = {handleReset}/>
    <section className='challenge'>
        <h2>{title}</h2>
        {timeRemaining === 0 && "You Lost"}
        <p className='challenge-time'>{timeDuration} second{timeDuration> 1 ? "s" : ""}</p>
        <p>
            <button onClick = {timeRemaining===0 || timeRemaining=== timeDuration*1000 ? handleStart : handleStop}>
                {timeRemaining===0 || timeRemaining=== timeDuration*1000? "Start" : "Stop"} Challenge
            </button>
        </p>
        <p className=''>
            {timeRemaining===0 || timeRemaining=== timeDuration*1000 ? "Time inActive" : "Time is Running"}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge