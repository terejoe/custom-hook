import { useEffect, useState } from 'react'

export default function useCounter(forwards=true) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwards){
        setCounter((prevCounter) => prevCounter + 1);
      }else{
        setCounter((prevCounter) => prevCounter - 1);
      }
      
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  return counter;
}
