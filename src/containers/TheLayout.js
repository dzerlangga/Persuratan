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
    //   axios.get(`/api/barang/find/${JSON.stringify(data.barangId)}`).then(e=>{
      //     if (e.data.status === 200) {
        //       setDatas(e.data.data)
        //     }
        //  })
      },[])
      
      function timer(){
        clearTimeout(setTimes);
        setTimes = setTimeout(() => {
          window.location = '/'
        }, 10 * 10000);
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
