import React,{Component} from 'react'
import {
  CRow,
} from '@coreui/react'
// import {Link, HashRouter, Route, Switch } from 'react-router-dom';
// import CIcon from '@coreui/icons-react'
import  axios  from 'axios'

class pendataan extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
componentDidMount(){
    axios.get('/api/users').then(e=>{
      console.log(e)
       this.setState({
         data : e.data.data
       })
    })
  }

  render(){
    let { data } = this.state
    return (
      <>
      <CRow>
        {data.map(user => {
          return(
            <div>
              {user.nip}
            </div>
          )
        })}
      </CRow>
      </>
    )
  }
}

export default pendataan
