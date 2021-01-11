import React, {Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg,
  CInvalidFeedback,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import axios from 'axios';
import { connect } from "react-redux";
import * as LoginAction from "./redux/action";
import { bindActionCreators } from "redux";
// import { Alert } from "../../modules/component";

const Alert = (props) =>{
  return(<CAlert closeButton style={{ margin: '0px 17% 20px 17%' }} color="danger"> 
      { props.data.showErrorValidation('username') + props.data.showErrorValidation('password')} 
      </CAlert>)
}
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      ShowNotif:false,
      allData: [
        {
          id: "username",
          value: "",
          error: ""
        },
        {
          id: "password",
          value: "",
          error: ""
        }
      ]
    }
    // this.login = this.login.bind(this)
  }

componentDidMount(){
  document.getElementById('username').focus()
}

getHandel(value,type,key = 'value'){
  const { allData } = this.state;
    const newData = allData.find(e => e.id === type);
    Object.assign(newData, { [key]: value });
    this.setState({
      allData: allData
    });
}

handleValue(param) {
  const { allData } = this.state;
    const data = allData.find(e => e.id === param);
    return data.value;
}

loginHandle(){
  if (this.handleValue('username') == "" || this.handleValue('password') == "") {
    this.handleValue('username') == '' && this.getHandel('data harus di isi','username','error')
    this.handleValue('password') == '' && this.getHandel('data harus di isi','password','error')
    return
  }
  let datas = {
    username: this.handleValue('username'),
    password: this.handleValue('password')
  }
  this.props.loginGet(datas,res=>{
    if (res.data.status != 200) {
      this.setState({ShowNotif: true})
      this.getHandel(res.data.msg,res.data.error,'error')
     }
  })
}

showErrorValidation(param){
  const { allData } = this.state;
  const data = allData.find(e => e.id === param);
  return data.error;
}

closeErrorValidation(param){
  this.getHandel('',param,'error')
  this.setState({ShowNotif: false})
}

render(){
  const { ShowNotif } = this.state
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
       {ShowNotif && <Alert data={this}/>}
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Masukan Akun Anda</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput invalid = {this.showErrorValidation('username') ? true : false} type="text"  placeholder="Username" value={this.handleValue("username")} id="username" 
                        onChange={e=>{
                          this.getHandel(e.target.value,'username')
                          this.closeErrorValidation('username')
                        }} />
                        <CInvalidFeedback>{this.showErrorValidation('username')}</CInvalidFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput invalid = {this.showErrorValidation('password') ? true : false} type="password" placeholder="Password" value={this.handleValue("password")} 
                        onChange={e=>{
                          this.getHandel(e.target.value,'password')
                          this.closeErrorValidation('password')
                        }} />
                        <CInvalidFeedback>{this.showErrorValidation('password')}</CInvalidFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="warning" className="px-4" style={{ color:'white' }} onClick={()=>this.loginHandle()}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-warning py-5 d-md-down-none" style={{ width: '44%', justifyContent:'center' }}>
              <CImg
                style={{ width: '186px',borderRadius:0, maxWidth: '71%',margin:'auto' }}
                src={'avatars/lgDndi.png'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
}

// function mapState(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return { user, users };
// }

// const actionCreators = {
//   loginGet: loginGet
//   // deleteUser: userActions.delete
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...LoginAction
    },dispatch
  );
}

export default connect(null, mapDispatchToProps )(Login);
// export default Login
