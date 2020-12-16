import React,{Component} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

// const TheHeader = () => {
  class TheHeader extends Component{
    constructor(props){
      super(props);
      this.state = {
        date: new Date()
      }
    }
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector(state => state.sidebarShow)

  // const toggleSidebar = () => {
  //   const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
  //   dispatch({type: 'set', sidebarShow: val})
  // }

  // const toggleSidebarMobile = () => {
    //   const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    //   dispatch({type: 'set', sidebarShow: val})
    // }
    componentDidMount(){
      setInterval(() => {
        this.setState({
          date: new Date()
        })
      }, 100);
    }
   

render(){
  return (
    <CHeader withSubheader style={{ backgroundColor:'#ff9336', color:'white'}}>
       <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          style={{pointerEvents:'none'}}
      >
      <CImg
            style={{ width:'60px' }}
            src={'avatars/gc.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
      </CToggler>
      <CToggler
      inHeader
      className="ml-3 d-md-down-none"
      style={{pointerEvents:'none'}}
      >
      <CImg
            style={{ width:'60px' }}
            src={'avatars/gc.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
      </CToggler>

      <CHeaderBrand className="mx-auto d-lg-none" style={{ fontSize:'30px' , color:'white' }}>
        {/* <CIcon name="logo" height="48" alt="Logo"/> */}
        Aplikasi Surat Menyurat
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-2">
          <div style={{ fontSize:'20px', fontWeight:'bold' }}>Aplikasi Surat Menyurat</div>
          <span> 
            {this.state.date.toLocaleTimeString('it-IT')}
          </span>
        </CHeaderNavItem>
      </CHeaderNav>


      <CHeaderNav className="px-3">
      {/* <TheHeaderDropdownNotif/> */}
      <div className="d-md-down-none">        
           Selamat Datang, <span style={{color:'yellow'}} >User</span>
      </div>
        {/* <TheHeaderDropdownTasks/> */}
        {/* <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown/>
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
        <div className="d-lg-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              {this.state.date.toLocaleTimeString()}
            </CLink>
          </div>
      </CSubheader>
    </CHeader>
  )
}
}

export default TheHeader
