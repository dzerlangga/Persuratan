import React ,{ useEffect,useState } from 'react';
import { 
    CCardHeader,
    CCardBody,
    CDataTable,
    CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import Modal from '../modalRekap'
import moment from 'moment';
// import { fakeData } from '../../../../@kudan';
import axios from 'axios';

  const field = [
    {key:'dari',label:'Penulis',_style:{textAlign:'center'}},
    {key:'kepada',_style:{textAlign:'center',width:'20%'}},
    {key:'tanggal',_style:{textAlign:'center'}},
    {key:'noSurat',_style:{textAlign:'center'}},
    {key:'ket',label:'Keterangan',_style:{textAlign:'center'}},
    {key:'action',_style:{textAlign:'center'}}
  ]
  
  const Rekap = (props) => {
    const { setData, setView, viewData} = props
    const [DataModal, setDataModal] = useState([]);
    const [warning, setWarning] = useState(false);
    const [delStatus, seStatusDel] = useState(false);
    const [ShowNotif, setNotifShow] = useState(false);
    const [dataSurat,setSurat] = useState([]);
    function delData(id) {
            axios.get(`/api/suratJalan/delete/${id}`).then(e=>{
              seStatusDel(e.data.status === 200)
              if (e.data.status === 200) {
                setNotifShow(true)
                setTimeout(() => {
                  getDataSurat()
                  setNotifShow(false)
                }, 3000);
                }
            })
    }

    function getDataSurat() {
      axios.get('/api/suratJalan').then(e=>{
        setSurat(e.data.data)
      })      
    }

    useEffect(()=>{
      getDataSurat()   
    },[])
    return(
      <>
        {warning && <Modal alert={warning} aletFunc={setWarning} data={DataModal} setData={setData} /> }
              <CCardHeader>
                Rekap Surat
              </CCardHeader>
              <CCardBody>
              {ShowNotif && <CAlert color={ delStatus ? 'success' : 'danger'}> { delStatus? 'Berhasil Menghapus Data' : 'Gagal Menghapus Data' } </CAlert> }
              <CDataTable
                items={dataSurat}
                fields={field}
                bordered
                tableFilter={{
                  placeholder:'cari surat jalan'
                }}
                itemsPerPageSelect 
                addTableClasses="table-srtjln"
                border={true}
                size="sm"
                striped
                itemsPerPage={5}
                noItemsView={{ noResults: 'Data yang dicari tidak ada', noItems: 'tidak ada data' }}
                pagination
                scopedSlots = {
                {
                  'action':(item)=>(<td className="action-button">
                    <CIcon style={{ color:'#5436ff' }} onClick={() => {setView(!viewData); setData(item)}} name="cilPencil"/>{' '}
                    <CIcon style={{ color:'red' }} onClick={() => {delData(item.id)}} name="cilTrash"/>{' '}
                    <CIcon style={{ color:'#ff9336' }} onClick={() => {setWarning(!warning); setDataModal(item)}} name="cilPrint"/>
                    </td>),
                  'status':(item)=>(<td className="text-center">{item.status}</td>),
                  'ket':(item)=>(<td className="text-center keteranganSRT">{item.ket === null ? '-' : item.ket}</td>),
                  'noSurat':(item)=>(<td className="text-center">{item.noSurat}</td>),
                  'tanggal':(item)=>(<td className="text-center">{moment(item.tanggal).format('DD MMMM YYYY')}</td>), 
                }}
                />
              </CCardBody>
        </>
        )
      }
      
export default Rekap;