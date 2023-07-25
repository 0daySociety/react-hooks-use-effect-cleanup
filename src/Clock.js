import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("calling my spirit")
    let clean=setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup(){
      clearInterval(clean)
    }
    

   
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
