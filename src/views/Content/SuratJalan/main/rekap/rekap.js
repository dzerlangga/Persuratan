import React ,{ useEffect,useState } from 'react';
import { 
    CCardHeader,
    CCardBody,
    CDataTable
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
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
      const { warnig, setWarning, setData, setView, viewData} = props
    const [dataSurat,setSurat] = useState([]);
    useEffect(()=>{
      axios.get('/api/suratJalan').then(e=>{
        setSurat(e.data.data)
      })
    },[])
    return(
      <>
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
                    <CIcon style={{ color:'#5436ff' }} onClick={() => {setView(!viewData); setData(item)}} name="cilPencil" size="1xl"/>{' '}
                    <CIcon style={{ color:'red' }} name="cilTrash" size="1xl"/>{' '}
                    <CIcon style={{ color:'#ff9336' }} onClick={() => {setWarning(!warnig); setData(item)}} name="cilPrint" size="1xl"/>
                    </td>),
                  'status':(item)=>(<td className="text-center">{item.status}</td>),
                  'ket':(item)=>(<td className="text-center">{item.ket === null ? '-' : item.ket}</td>),
                  'noSurat':(item)=>(<td className="text-center">{item.noSurat}</td>),
                  'tanggal':(item)=>(<td className="text-center">{moment(item.tanggal).format('DD MMMM YYYY')}</td>), 
                }}
                />
              </CCardBody>
        </>
        )
      }
      
export default Rekap;