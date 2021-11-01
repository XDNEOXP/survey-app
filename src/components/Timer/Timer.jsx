import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const Timer = () => {
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0)
  const [second1, setSecond1] = useState()
  const [second2, setSecond2] = useState()
  const [minute, setMinute] = useState()
  let timer
  const history = useHistory()

  const getTime= () => {
    let time = JSON.parse(localStorage.getItem('time'))
    if(time !== null){
      if(time !== [0,0,0]){
      setMinute(time[0])
      setSecond1(time[1])
      setSecond2(time[2])
     }
     
    } else {
      setMinute(1)
      setSecond1(5)
      setSecond2(9)
    }
  }

  const setTime = () => {
    localStorage.setItem('time', JSON.stringify([minute,second1,second2]))
    timer = setTimeout( () => {
     setCount(count+1)

     if(minute === 2){
       setMinute(minute-1)
       return
     }

     if(second2 > 0){
       setSecond2(second2-1)
       return
     }

     if(second1 > 0){
       setSecond1(second1-1)
       setSecond2(9)
       return
     }

     if(minute > 0){
       setMinute(minute-1)
       setSecond1(5)
       setSecond2(9)
       return
     }

     if(minute >= 0 && second1 <= 0){
       history.push('/message')
     }
     
    },1000)
  }

  useEffect(() => {
    setStart(true)
    getTime()
  }, []);
  

  useEffect(() => {
    setTime()
    return () => {
      clearTimeout(timer)
    }
  }, [start,count]);

  return (
      <div className="d-flex justify-content-center bg-success text-light p-2">
        <span>Time remaining {minute}:</span>
        <span>{second1}</span>
        <span>{second2}</span>
      </div>
)
}

export default Timer