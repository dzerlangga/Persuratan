import React ,{ useRef } from 'react';
import { 
    CButton,
    CModal,
    CModalBody,
    CModalHeader,
    CModalFooter,
    CModalTitle,
    CDataTable
} from '@coreui/react';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
// import axios from 'axios';

const field = [
    {key:'noUrut',label:'No',_style:{textAlign:'center',width:'10%'}},
    {key:'jenis',label:'Macam/Jenis Barang',_style:{textAlign:'center',width:'50%'}},
    {key:'jumlah',label:'Jumlah',_style:{textAlign:'center'}},
    {key:'ket',label:'Keterangan',_style:{textAlign:'center'}}
  ]

const Modal = (props) =>{
  const { data, aletFunc, alert ,setData} = props
  const componentRef = useRef();
  return(
        <CModal 
           show={alert} 
           onClose={() => {aletFunc(!alert); setData([])}}
           color="warning"
           size="lg"
         >
           <CModalHeader closeButton>
             <CModalTitle>Preview Surat</CModalTitle>
           </CModalHeader>
           <CModalBody  style={{ overflow:'auto', height:'73vh' }}>
            <div ref={componentRef} style={{ border:'3px solid lightgray', padding:'10px'}}>
             <table style={{ width:'100%' }} border='0'>
               <tbody>

                 <tr>
                     <td style={{ textAlign:'center', width: '225px' , height:'100px'}}>
                         <div style={{ fontWeight:'600',fontSize:'27px'}}>Guna Jaya</div>
                         <div style={{ fontSize:'11px' }}>Ruko Peralatan Matrial</div>
                         <div style={{ fontSize:'11px' }}>jln. sukamenak rt 02 rw 17</div>
                         <div style={{ fontSize:'11px' }}>telp. 0895704280410</div>
                         <div style={{ fontSize:'11px' }}>Bandung</div>
                     </td>
                     <td className="text-left">
                         <div style={{ width:'186px',marginLeft:'auto', height:'100px' }}>Kepada <br/> YTH. {data.kepada}</div>
                     </td>
                 </tr>
                 <tr className="text-center"><td colSpan='2' style={{ textDecoration:'underline',fontSize:'20px',fontWeight:'bold',position:'relative', left:'0',top:'28%' }}>Surat Jalan</td></tr>
                 <tr><td colSpan='2' style={{fontSize:'11px' }}>No: {' '}{data.noSurat}</td></tr>
                 <tr style={{ borderBottom:'2px solid black',paddingBottom:'10px' ,fontSize:'11px'}}><td colSpan='2'>Harap diterima dengan baik barang - barang tersebut dibawah ini:</td></tr>
                 <tr>
                     <td colSpan="2" style={{ paddingTop:'7px' }}>
                     <CDataTable
                       items={[]}
                       fields={field}
                       bordered
                       border={true}
                       size="sm"
                       noItemsView={{ noResults: '', noItems: '-' }}
                       scopedSlots = {
                         {
                           'ket':(item)=>(<td className="text-center">{item.ket === null ? '-' : item.ket}</td>),
                          }}
                          />
                     </td>
                </tr>
                <tr><td colSpan="2" className="text-right">Bandung, {moment(new Date).format('DD MMMM YYYY')} </td></tr>
                <tr>
                    <td colSpan="2">
                        <div style={{ display:'flex',justifyContent:'space-around' ,paddingTop:'5px'}}>
                            <div className="text-center">
                              Penerima : 
                              <p style={{ paddingTop:'50px' }}>(___________________)</p>
                            </div>
                            <div className="text-center">
                              Pengirim :
                              <p style={{ paddingTop:'50px' }}>(___________________)</p>
                            </div>
                            <div className="text-center">
                              Mengetahui :
                              <p style={{ paddingTop:'50px' }}>(___________________)</p>
                            </div>
                        </div>
                    </td>
                </tr>
               </tbody>
             </table>
            </div>
           </CModalBody>
           <CModalFooter>
           <ReactToPrint
             trigger={() => <CButton color="primary">Print</CButton>}
             content={() => componentRef.current}
             />
             
           </CModalFooter>
         </CModal>
     )
  }
  

export default Modal;