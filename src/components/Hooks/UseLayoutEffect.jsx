import { useEffect, useLayoutEffect } from "react"

const UseLayoutEffect = () => {
    useEffect(()=>{
        window.scrollBy(0,1000)
        console.log("useEffect")
        
    })

    useLayoutEffect(()=>{
        // window.scrollBy(0,1000)
        console.log('use layout effect')
        
    })
  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect