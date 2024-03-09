import React, { useState } from 'react'

export default function Demo() {
    // 1st parameter : to store the value : count to store the number of count
// 2d parameter : to chage the value of 1st parameter 
  const [count, setCount] = useState(0) 

  const increaseCount = () => {
    setCount(prev => prev +2); 
  }

  const resetCount = () => {
    setCount(0)
  }


  return (


    <div>

<h2>Count : {count}</h2>

<button onClick={() => {increaseCount()}}>Increase Count</button>
<button onClick={() => {resetCount()}}>Reset Count to zero</button>


    </div>
  )
}
