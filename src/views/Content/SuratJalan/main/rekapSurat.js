import React ,{ useState } from 'react';
import { CCard } from '@coreui/react';
import RekapFile from './rekap/rekap';
import ViewRekap from './rekap/view';

  const Rekap = () => {
    const [selectData, setData] = useState([]);
    const [viewData, setView] = useState(true);
    return(
      <CCard>
      {viewData ? 
        <RekapFile setData={setData} setView={setView} viewData={viewData} />:
        <ViewRekap setView={setView} viewData={viewData} data={selectData} setData={setData} />
      }
      </CCard>
      )
  }
      
export default Rekap;