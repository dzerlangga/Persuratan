import React, {useState,lazy} from 'react'
import { CCol , CListGroup ,CListGroupItem,} from '@coreui/react'
// import '../../../scss/_content.scss';
import { jalanMenus } from '../../../@kudan';
const Rekap =  lazy(()=>(import('./main/rekapSurat')));
const CreateSurat =  lazy(()=>(import('./main/createSurat')));
const MainMenu = [
  {
    id:1,
    component: CreateSurat
  },
  {
    id:2,
    component: Rekap
  }
]
const SuratJalan = () => {
  const [menuActive,setMenu] = useState(1);
  return (
      <div  style={{  display: 'flex',flexDirection: 'row' }}>
          <CCol xs="2" className="menu" style={{  }}>
                  <CListGroup id="list-tab" role="tablist">
                    {jalanMenus.map(e=>{
                      return(
                        <CListGroupItem key={e.id} onClick={() => setMenu(e.id)} action active={menuActive === e.id} >{e.name}</CListGroupItem>
                      )
                    })}
                  </CListGroup>
          </CCol>
          <CCol xs='10' className="mainMenu">
            {MainMenu.map((data,indx)=>{
              const { component: Component ,id} = data;
              if (menuActive !== id) return
              return (<Component key={indx} />)
            })}
          </CCol>
      </div>
  )
}

export default SuratJalan;