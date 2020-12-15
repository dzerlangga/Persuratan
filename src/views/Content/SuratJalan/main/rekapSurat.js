import React ,{ useEffect,useState } from 'react';
import { 
    CCard,
    CCardHeader,
    CCardBody,
    CDataTable,
    CButton,
} from '@coreui/react';
import moment from 'moment';
import Modal from './modalRekap'
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
  
  const Rekap = () => {
    const [dataSurat,setSurat] = useState([]);
    const [warning, setWarning] = useState(false);
    const [selectData, setData] = useState([]);
    useEffect(()=>{
      axios.get('/api/suratJalan').then(e=>{
        setSurat(e.data.data)
      })
    },[])
    return(
      <CCard>
        <Modal alert={warning} aletFunc={setWarning} data={selectData} setData={setData} />
              <CCardHeader>
                Rekap Surat
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={dataSurat}
                fields={field}
                bordered
                tableFilter={{
                  placeholder:'cari surat jalan'
                }}
                itemsPerPageSelect  
                border={true}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots = {
                {
                  'action':(item)=>(<td style={{ textAlign:'center' }}>
                    <a href="#">edit</a>{' '}
                    <a>deleted</a>{' '}
                    <CButton color="warning" onClick={() => {setWarning(!warning); setData(item)}} className="mr-1">Print</CButton>
                    </td>),
                  'status':(item)=>(<td style={{ textAlign:'center' }}>{item.status}</td>),
                  'ket':(item)=>(<td style={{ textAlign:'center' }}>{item.ket === null ? '-' : item.ket}</td>),
                  'noSurat':(item)=>(<td style={{ textAlign:'center' }}>{item.noSurat}</td>),
                  'tanggal':(item)=>(<td style={{ textAlign:'center' }}>{moment(item.tanggal).format('DD MMMM YYYY')}</td>), 
                }}
              />
              </CCardBody>
        </CCard>
    )
}

export default Rekap;