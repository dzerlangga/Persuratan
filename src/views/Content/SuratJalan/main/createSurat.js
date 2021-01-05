import React, { Fragment, Component } from 'react';
import { 
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CRow,
    CFormGroup,
    CLabel,
    CInput,
    CTextarea,
    CButton,
    CAlert,
    CInvalidFeedback
} from '@coreui/react';
import axios from 'axios';
import moment from 'moment';
import { Kudation } from '../../../../@kudan'
  
class CreateRekap extends Component {
constructor(props){
  super(props);
  this.state = {
    ShowNotif:false,
    delStatus: false,
    numberNext:null,
    allData: [
      {
        id: "dari",
        value: "Deni Romansyah",
        error: ""
      },
      {
        id: "kepada",
        value: "",
        error: ""
      },
      {
        id: "noSurat",
        value: "",
        error: ""
      },
      {
        id: "barangId",
        value: "",
        error: ""
      },
      {
        id: "ket",
        value: "",
        error: ""
      }
    ]
  }
}

handleValue(param) {
  const { allData } = this.state;
    const data = allData.find(e => e.id === param);
    return data.value;
}

findDataNoSUrat(){
  axios.get(`/api/suratJalan/byTanggal/:id`).then(e=>{
    const years = moment((new Date()).toISOString()).format("YYYY");
    const date = moment((new Date()).toISOString()).format("DD");
    let noSurat = `${years}/SRTJLN${(e.data.data).length + 1}/${date}`
    this.getHandel(noSurat,'noSurat')
  })   
}

componentDidMount(){
  this.findDataNoSUrat()  
}

showErrorValidation(param){
  const { allData } = this.state;
  const data = allData.find(e => e.id === param);
  return data.error;
}

getHandel(value,type,key = 'value'){
  const { allData } = this.state;
    const newData = allData.find(e => e.id === type);
    Object.assign(newData, { [key]: value });
    this.setState({
      allData: allData
    });
}

storeData(){
  let data = {
    dari: this.handleValue('dari'),
    kepada: this.handleValue('kepada'),
    noSurat: this.handleValue('noSurat'),
    barangId: this.handleValue('barangId'),
    ket: this.handleValue('ket')
  }

  const validCheck = {
    // dari:'required',
    kepada:'required',
    // barangId:'required',
  }
Kudation.schema(validCheck).validation(data,(val)=>{
  console.log(val);
  // if (val.status === 200) {
    // this.getHandel('cekk data','kepada','error')
    // return
  // }
  // axios.post('/api/suratJalan/post',
  // data,{
  //   params: {
  //     data: data
  //   },
  // }).then(e=>{
  //   this.setState({
  //     delStatus: e.data.status === 200,
  //     ShowNotif: true
  //     })
  //     if (e.data.status === 200) {
  //       setTimeout(() => {
  //               // getDataSurat()
  //               this.setState({
  //                 ShowNotif: false
  //               }, this.afterPost())
  //               // setNotifShow(false)
  //             }, 3000);
  //           }
  //         }) 

})
  
}

afterPost(){
  // this.getHandel('Deni Romansy','dari');
  this.getHandel('','kepada');
  this.findDataNoSUrat()
  this.getHandel('','barangId');
  this.getHandel('','ket');
}

render(){
  const {ShowNotif , delStatus} = this.state
    return(
      <Fragment>
        
        <CCard>
              <CCardHeader>
                Buat Surat Jalan
                <div className="card-header-actions sizeoye-880">
                      <CButton type="Buat" size="xl" className="float-right" color="primary" onClick={()=>this.storeData()}>Buat</CButton>
                </div>
              </CCardHeader>
              <CCardBody>
              {ShowNotif && <CAlert closeButton color={delStatus ? "success": "danger"}> { delStatus ? 'Berhasil Menambahkan Data' : 'Gagal Menambahkan Data' } </CAlert> }

                <CForm>
                  <CRow>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="dari">Penulis</CLabel>
                      <CInput type="text" id="dari" name="dari" readOnly style={{ pointerEvents:'none' ,color:'orange'}} value="Deni Romansyah"/>
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="kepada">Kepada</CLabel>
                      <CInput invalid = {this.showErrorValidation('kepada') ? true : false} type="text" name="kepada" value={this.handleValue("kepada")} onChange={e=>{
                        this.getHandel(e.target.value,'kepada')
                        this.getHandel('','kepada','error')}} />
                      <CInvalidFeedback>{this.showErrorValidation('kepada')}</CInvalidFeedback>
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="noSurat">No Surat</CLabel>
                      <CInput type="text" id="noSurat" name="noSurat" readOnly style={{ pointerEvents:'none' ,color:'orange'}} value={this.handleValue("noSurat")} />
                    </CFormGroup>

                    <CFormGroup className="col-sm-6">
                      <CLabel htmlFor="barangId">Barang</CLabel>
                      <CInput type="text" id="barangId" name="barangId" onChange={(e)=>this.getHandel(e.target.value,'barangId')} value={this.handleValue("barangId")} />
                    </CFormGroup>

                    <CFormGroup className="col-sm-12">
                      <CLabel htmlFor="ket">Keterangan</CLabel>
                      <CTextarea name="ket" id="ket" rows="6" onChange={(e)=>this.getHandel(e.target.value,'ket')} value={this.handleValue("ket")} />
                    </CFormGroup>

                    {/* <CFormGroup className="col-sm-12 d-none">
                      <CButton type="Buat" size="xl" className="col-sm-12" onClick={()=>this.postDataSurat()} id="simpan" color="primary">Buat</CButton>
                    </CFormGroup> */}

                  </CRow>
                </CForm>
              </CCardBody>
        </CCard>
      </Fragment>
    )
  }
}

export default CreateRekap;