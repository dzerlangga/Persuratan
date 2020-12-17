import React,{Component} from 'react'
import {
  CRow,
} from '@coreui/react'
// import {Link, HashRouter, Route, Switch } from 'react-router-dom';
// import CIcon from '@coreui/icons-react'
import  axios  from 'axios'

class faktur extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
componentDidMount(){
    axios.get('/api/suratJalan').then(e=>{
       this.setState({
         data : e.data.data
       })
    })
  }

  render(){
    let { data } = this.state
    return (
      <>
      <div className="fakturMenu">
        {data.map((user,indx) => {
          return(
            <p key={indx}>
              {user.kepada}{" "}
            </p>
          )
        })}
      </div>
      </>
    )
  }
}

export default faktur
