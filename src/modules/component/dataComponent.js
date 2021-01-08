import React  from 'react';
import { CImg } from "@coreui/react";
const Loading = (
    <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" style={{ height:'43em',display:'inline-flex',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
    <CImg
      src={'avatars/lgDndi.png'}
      className="c-avatar-img"
      alt="admin@bootstrapmaster.com"
      style={{ width:'54%',borderRadius:0 }}
    />
    <p style={{ fontSize:'34px'}}>loading...</p>
    </div>
  </div>)

export default Loading;