import React, {useEffect} from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

let setTimes = null;
const TheLayout = () => {

  useEffect(()=>{
    timer()
    window.addEventListener('mousemove',() =>{timer()})
    window.addEventListener('scroll',() =>{timer()})
    window.addEventListener('click',() =>{timer()})
      },[])
      
      function timer(){
        clearTimeout(setTimes);
        setTimes = setTimeout(() => {
          localStorage.removeItem('TOKEN_PERSURATAN')
          window.location.reload();
        }, 10 * 1000);
      }

  return (
    <div className="c-app c-default-layout">
      {/* <TheSidebar/> */}
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent />
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout
