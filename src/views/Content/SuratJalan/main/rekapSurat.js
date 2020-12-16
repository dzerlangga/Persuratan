import React ,{ useEffect,useState } from 'react';
import { CCard } from '@coreui/react';
import Modal from './modalRekap'
import RekapFile from './rekap/rekap';
import ViewRekap from './rekap/view';

  const Rekap = () => {
    const [warning, setWarning] = useState(false);
    const [selectData, setData] = useState([]);
    const [viewData, setView] = useState(true);
    return(
      <CCard>
      <Modal alert={warning} aletFunc={setWarning} data={selectData} setData={setData} />
      {viewData ? 
        <RekapFile warning={warning} setWarning={setWarning} setData={setData} setView={setView} viewData={viewData} />:
        <ViewRekap setView={setView} viewData={viewData} data={selectData} setData={setData} />
      }
      </CCard>
      )
  }
      
export default Rekap;