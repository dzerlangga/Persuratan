import React,{Component} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import {Link, HashRouter, Route, Switch } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import { dataMenus } from '../../@kudan'
import  axios  from 'axios'

class main extends Component{
// componentDidMount(){
//     axios.get('/api/users').then(e=>{
//        this.setState({
//          data : e.data.data
//        })
//     })
//   }

  render(){
    return (
      <>
      <CRow>
        {dataMenus.map(res=>{
          return(
            <CCol sm="6" lg="3" key={res.id} className="card-menu">
            <Link to={res.to} style={{ textDecoration:'none' }}>
            <CWidgetDropdown
              color={"gradient-"+res.color}
              header={res.header}
            >
              <CDropdown>
                <CDropdownToggle caret={false} color="transparent">
                  <CIcon name={"cil"+res.icon} size="5xl"/>
                </CDropdownToggle>
              </CDropdown>
            </CWidgetDropdown>
                </Link>
          </CCol>
          )
        })}
      </CRow>
      </>
    )
  }
}

export default main
